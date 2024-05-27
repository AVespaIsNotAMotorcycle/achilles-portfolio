import React, { useState } from 'react';
import propTypes from 'prop-types';

import './accordion.css';

export default function Accordion({ images }) {
  const [selected, setSelected] = useState(0);
  return (
    <ol className="accordion">
      {images.map(({ source, alt }, index) => (
        <li key={source} className={index === selected ? 'selected' : ''}>
          <button type="button" onClick={() => { setSelected(index); }}>
            <img src={source} alt={alt} />
          </button>
        </li>
      ))}
    </ol>
  );
}
Accordion.propTypes = {
  images: propTypes.arrayOf(propTypes.shape({
    source: propTypes.string,
    alt: propTypes.string,
  })).isRequired,
};
