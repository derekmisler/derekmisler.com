import { StyledComponentsRegistry } from 'components/molecules/StyledComponentsRegistry';
export { metadata, viewport } from 'constants/resume';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
