import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { StyledComponentsRegistry } from 'components/molecules/StyledComponentsRegistry';
export { metadata, viewport } from 'constants/resume';

const font = localFont({
  src: '../styles/neue-haas.woff2',
  display: 'swap',
  weight: '500',
  variable: '--font',
  style: 'normal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
