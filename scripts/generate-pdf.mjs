#!/usr/bin/env node
/*
 * generate-pdf.mjs
 *
 * Generates derek-misler-resume.pdf from the built static site.
 *
 * Steps:
 *   1. Spin up a local HTTP server pointing at dist/
 *   2. Launch Playwright Chromium with print media emulation
 *   3. Run page.pdf() with letter-size output
 *   4. Set PDF metadata (title, author) via pdf-lib post-processing
 *   5. Write the PDF into dist/ (replacing the hand-maintained file)
 *   6. Shut everything down
 *
 * Usage:
 *   node scripts/generate-pdf.mjs [--dist <path>] [--out <filename>]
 *
 * Defaults:
 *   --dist  ./dist
 *   --out   derek-misler-resume.pdf  (placed inside --dist)
 */

import { createServer } from 'node:http';
import { readFile, stat, writeFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

/* ---------- CLI args ---------- */
const args = process.argv.slice(2);
const distDir = resolve(args[args.indexOf('--dist') + 1] ?? './dist');
const outFilename = args[args.indexOf('--out') + 1] ?? 'derek-misler-resume.pdf';
const outPath = join(distDir, outFilename);

/* ---------- PDF metadata ---------- */
const PDF_TITLE = 'Derek Misler Resume';
const PDF_AUTHOR = 'Derek Misler';
const PDF_SUBJECT = 'Resume and portfolio for Derek Misler, Staff-level Front-End Engineer';
const PDF_KEYWORDS = 'resume, front-end, engineer, React, TypeScript, Docker, AI';

/* ---------- MIME types for the static server ---------- */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
};

/* ---------- Minimal static file server ---------- */
function createStaticServer(root) {
  return createServer(async (req, res) => {
    let urlPath = req.url.split('?')[0];
    if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

    let filePath = join(root, urlPath);

    // Try the path as-is, then with .html appended (Astro static output)
    let fileFound = false;
    for (const candidate of [filePath, filePath + '.html', join(filePath, 'index.html')]) {
      try {
        const info = await stat(candidate);
        if (info.isFile()) {
          filePath = candidate;
          fileFound = true;
          break;
        }
      } catch {
        // not found, try next candidate
      }
    }

    if (!fileFound) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }

    const ext = extname(filePath).toLowerCase();
    const contentType = MIME[ext] ?? 'application/octet-stream';
    const body = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(body);
  });
}

/* ---------- Wait for the server to be ready ---------- */
function listen(server, port) {
  return new Promise((resolve, reject) => {
    server.listen(port, '127.0.0.1', () => resolve());
    server.on('error', reject);
  });
}

/* ---------- Set PDF metadata using pdf-lib ---------- */
async function setMetadata(pdfPath) {
  const raw = await readFile(pdfPath);
  const doc = await PDFDocument.load(raw);

  doc.setTitle(PDF_TITLE);
  doc.setAuthor(PDF_AUTHOR);
  doc.setSubject(PDF_SUBJECT);
  doc.setKeywords([PDF_KEYWORDS]);
  doc.setProducer('Playwright + pdf-lib');
  doc.setCreator('scripts/generate-pdf.mjs');

  const patched = await doc.save();
  await writeFile(pdfPath, patched);
}

/* ---------- Main ---------- */
async function main() {
  // Verify dist/ exists
  try {
    await stat(distDir);
  } catch {
    console.error(`ERROR: dist directory not found at ${distDir}. Run "pnpm build:site" first.`);
    process.exit(1);
  }

  console.log(`Serving static files from: ${distDir}`);
  const server = createStaticServer(distDir);
  const port = 7331;
  await listen(server, port);
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Static server listening at ${baseUrl}`);

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      // Print media emulation so @media print rules apply
      mediaType: 'print',
    });
    const page = await context.newPage();

    console.log(`Loading ${baseUrl}/`);
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });

    // Ensure light theme is active (print.css sets it via CSS variables,
    // but forcing the data-theme attribute here is an extra safety net
    // in case the site reads localStorage on load).
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });

    console.log(`Generating PDF to: ${outPath}`);
    await page.pdf({
      path: outPath,
      format: 'Letter',
      printBackground: false,
      // These margin values mirror the @page CSS in print.css.
      margin: { top: '0.75in', right: '0.75in', bottom: '0.75in', left: '0.75in' },
      displayHeaderFooter: false,
    });

    console.log('Setting PDF metadata...');
    await setMetadata(outPath);

    console.log(`PDF written: ${outPath}`);
  } finally {
    await browser?.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
