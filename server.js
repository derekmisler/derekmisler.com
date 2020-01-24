const { createServer } = require('https')
const { parse } = require('url')
const { readFileSync, createReadStream } = require('fs')
const next = require('next')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: readFileSync('../certificates/server.key'),
  cert: readFileSync('../certificates/server.crt')
}

app.prepare()
  .then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname)
        app.serveStatic(req, res, filePath)
      } else {
        handle(req, res, parsedUrl)
      }
    }).listen(port, err => {
      if (err) throw err
      console.info(`> Ready on https://localhost:${port}`)
    })
  })
