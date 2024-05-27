import React from 'react';
import propTypes from 'prop-types';

import './quote.css';

export default function Quote({
  quote,
  name,
  context,
  imageSource,
}) {
  return (
    <aside className="quote">
      <div className="text">
        <div>
          <q>{quote}</q>
        </div>
        <div>
          <span className="name">{name}</span>
          {context && <span className="context">{context}</span>}
        </div>
      </div>
      {imageSource && <img src={imageSource} alt={name} />}
    </aside>
  );
}
Quote.propTypes = {
  quote: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  context: propTypes.string,
  imageSource: propTypes.string,
};
Quote.defaultProps = {
  context: undefined,
  imageSource: undefined,
};
