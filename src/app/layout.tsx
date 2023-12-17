import { StyledComponentsRegistry } from 'molecules/StyledComponentsRegistry';
import { Header } from 'molecules/Header';
export { metadata, viewport } from 'constants/resume';
import { Preload } from '../components/atoms/Preload';
import { GlobalStyle } from 'styles/global';
import { Theme } from 'molecules/Theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Preload />
          <Theme variant="dark">
            <GlobalStyle />
            <Header />
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
