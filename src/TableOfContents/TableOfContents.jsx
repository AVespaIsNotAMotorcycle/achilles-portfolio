import React from 'react';
import propTypes from 'prop-types';

import './tableOfContents.css';

function renderHeader(text) {
  if (Array.isArray(text)) return text.join(' - ');
  return text;
}

export default function TableOfContents({ sections }) {
  console.log(sections);
  return (
    <nav className="table-of-contents">
      <h2>Table of Contents</h2>
      <ol>
        {Object.keys(sections).map((id) => (
          <li><a key={id} href={`#${id}`}>{renderHeader(sections[id])}</a></li>
        ))}
      </ol>
    </nav>
  );
}
TableOfContents.propTypes = {
  sections: propTypes.instanceOf(Object).isRequired,
};
