import React from 'react';
import propTypes from 'prop-types';

import './section.css';

function Heading({ text, level }) {
  switch (level) {
    case 6: return <h6>{text}</h6>;
    case 5: return <h5>{text}</h5>;
    case 4: return <h4>{text}</h4>;
    case 3: return <h3>{text}</h3>;
    case 2: return <h2>{text}</h2>;
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
      {typeof body === 'string' && <p>{body}</p>}
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
