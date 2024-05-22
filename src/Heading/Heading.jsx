import React from 'react';
import propTypes from 'prop-types';

import './heading.css';

export default function Heading({ children, level }) {
  const internals = Array.isArray(children)
    ? children.map((child) => <span key={child}>{child}</span>)
    : children;
  switch (level) {
    case 1: return <h1>{internals}</h1>;
    case 2: return <h2>{internals}</h2>;
    case 3: return <h3>{internals}</h3>;
    case 4: return <h4>{internals}</h4>;
    case 5: return <h5>{internals}</h5>;
    case 6: return <h6>{internals}</h6>;
    default: return <h2>{internals}</h2>;
  }
}
Heading.propTypes = {
  children: propTypes.node.isRequired,
  level: propTypes.number,
};
Heading.defaultProps = { level: 2 };
