import { Fragment } from 'react';
import { Text, Link } from 'components/atoms/Typography';
import { contact } from 'constants/resume';

const LINKS = [
  { title: 'Say Hello', url: 'mailto:derekmisler@gmail.com?subject=Hello!' },
  { title: 'LinkedIn', url: contact.linkedin },
  { title: 'GitHub', url: contact.github },
  { title: 'Download a PDF', url: 'derek-misler-resume.pdf', download: true },
];

export const Contact = () => {
  return (
    <Text>
      {LINKS.map((link) => {
        return (
          <Fragment key={link.title}>
            <Link
              download={link.download}
              href={link.url}
              rel="noopener"
              target="_blank"
            >
              {link.title}!
            </Link>
          </Fragment>
        );
      })}
    </Text>
  );
};
