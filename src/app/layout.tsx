import localFont from 'next/font/local';

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
    <html lang="en" className={font.className}>
      <body className={font.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
