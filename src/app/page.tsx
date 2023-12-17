'use client'

import { Header } from '@/molecules/Header';
import { GlobalStyle } from '@/styles/global';
import { Section } from '@/molecules/Section';
import { About } from '@/organisms/About';
import { Experience } from '@/organisms/Experience';
import { getTheme } from '@/utils/getTheme';

import {Preload} from '@/atoms/Preload'

export default function App() {
  const theme = getTheme()
  return (
    <>
    <Preload />
    <GlobalStyle theme={theme} />
    <Header />
    <main>
      <Section heading="This Is Me">
        <About />
      </Section>
      <Section heading="This Is My Experience">
        <Experience />
      </Section>
    </main>
  </>
  );
}
