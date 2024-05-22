import React from 'react';
import propTypes from 'prop-types';

import './tableOfContents.css';

function renderHeader(text) {
  if (Array.isArray(text)) return text[0];
  return text;
}

function ListItem({ href, name, descendants }) {
  return (
    <li>
      <a href={href}>{renderHeader(name)}</a>
      <List sections={descendants} />
    </li>
  );
}
ListItem.propTypes = {
  href: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  descendants: propTypes.instanceOf(Object),
};
ListItem.defaultProps = { descendants: undefined };

function List({ sections }) {
  if (!sections) return null;
  const sectionIDs = Object.keys(sections);
  return (
    <ol>
      {sectionIDs.map((id) => (
        <ListItem
          key={id}
          href={`#${id}`}
          name={sections[id].name}
          descendants={sections[id].descendants}
        />
      ))}
    </ol>
  );
}
List.propTypes = {
  sections: propTypes.instanceOf(Object).isRequired,
};

export default function TableOfContents({ sections }) {
  return (
    <nav className="table-of-contents">
      <h2>Table of Contents</h2>
      <List sections={sections} />
    </nav>
  );
}
TableOfContents.propTypes = {
  sections: propTypes.instanceOf(Object).isRequired,
};
