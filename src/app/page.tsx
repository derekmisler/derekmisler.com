'use client';
import { Section } from 'components/molecules/Section';
import { About } from 'components/organisms/About';
import { Experience } from 'components/organisms/Experience';
import { Header } from 'components/molecules/Header';
import { GlobalStyle } from 'styles/global';
import { useCallback, useState } from 'react';
import { themes } from 'styles/colors';
import { Toggle } from 'components/molecules/Toggle';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);
  return (
    <>
      <GlobalStyle theme={isActive ? themes.light : themes.dark} />
      <Header />
      <main>
        <Section heading="This Is Me">
          <About />
        </Section>
        <Section heading="This Is My Experience">
          <Experience />
        </Section>
      </main>
      <Toggle isActive={isActive} onToggle={handleToggle} />
    </>
  );
}
