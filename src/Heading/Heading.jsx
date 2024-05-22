import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { LevelContext } from '../Section/levelContext';
import './heading.css';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  const internals = Array.isArray(children)
    ? children.map((child) => <span key={child}>{child}</span>)
    : children;
  switch (level) {
    case 1: return <h1 className="heading">{internals}</h1>;
    case 2: return <h2 className="heading">{internals}</h2>;
    case 3: return <h3 className="heading">{internals}</h3>;
    case 4: return <h4 className="heading">{internals}</h4>;
    case 5: return <h5 className="heading">{internals}</h5>;
    case 6: return <h6 className="heading">{internals}</h6>;
    default: return <h2 className="heading">{internals}</h2>;
  }
}
Heading.propTypes = {
  children: propTypes.node.isRequired,
};
