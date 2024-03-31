import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'react-markdown';

import './section.css';

function Heading({ text, level }) {
  switch (level) {
    case 6: return <h6 id={text}>{text}</h6>;
    case 5: return <h5 id={text}>{text}</h5>;
    case 4: return <h4 id={text}>{text}</h4>;
    case 3: return <h3 id={text}>{text}</h3>;
    case 2: return <h2 id={text}>{text}</h2>;
    default: return null;
  }
}
Heading.propTypes = {
  text: propTypes.string.isRequired,
  level: propTypes.number.isRequired,
};

export default function Section({ section, level }) {
  const { title, body } = section;
  return (
    <section className="markdown-section">
      <Heading level={level} text={title} />
      {typeof body === 'string' && <Markdown>{body}</Markdown>}
      {Array.isArray(body)
        && body.map((chunk) => <Section key={chunk.title} level={level + 1} section={chunk} />)}
    </section>
  );
}
Section.propTypes = {
  section: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.oneOfType([
      propTypes.string,
      propTypes.arrayOf(
        propTypes.instanceOf(Object),
      ),
    ]),
  }).isRequired,
  level: propTypes.number.isRequired,
};
