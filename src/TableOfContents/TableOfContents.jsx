import React from 'react';
import propTypes from 'prop-types';

import './tableOfContents.css';

const DETAILS_PROPS = propTypes.shape({
  title: propTypes.string,
  body: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(Object),
  ]),
});

function Siblings({ details }) {
  const { title, body } = details;
  const href = `#${title}`;
  if (typeof body !== 'string' && !Array.isArray(body)) return null;
  if (typeof body === 'string') return <li><a href={href}>{title}</a></li>;
  return (
    <li>
      <a href={href}>{title}</a>
      <ol>
        {body.map((section) => <Siblings key={section.title} details={section} />)}
      </ol>
    </li>
  );
}
Siblings.propTypes = { details: DETAILS_PROPS.isRequired };

export default function TableOfContents({ sections }) {
  return (
    <nav className="table-of-contents">
      <h2>Table of Contents</h2>
      <ol>
        {sections.map((section) => <Siblings key={section.title} details={section} />)}
      </ol>
    </nav>
  );
}
TableOfContents.propTypes = { sections: propTypes.arrayOf(DETAILS_PROPS).isRequired };
