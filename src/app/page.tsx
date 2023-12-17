'use client';
import { Section } from 'components/molecules/Section';
import { About } from 'components/organisms/About';
import { Experience } from 'components/organisms/Experience';
import { Header } from 'components/molecules/Header';
import { Preload } from 'components/atoms/Preload';
import { GlobalStyle } from 'styles/global';
import { Theme } from 'components/molecules/Theme';

export default function App() {
  return (
    <>
      <Preload />
      <Theme variant="dark">
        <GlobalStyle />
        <Header />
        <main>
          <Section heading="This Is Me">
            <About />
          </Section>
          <Section heading="This Is My Experience">
            <Experience />
          </Section>
        </main>
      </Theme>
    </>
  );
}
