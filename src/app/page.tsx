import { Section } from 'molecules/Section';
import { About } from 'organisms/About';
import { Experience } from 'organisms/Experience';

export default function App() {
  return (
    <>
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
