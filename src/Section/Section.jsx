import React from 'react';
import propTypes from 'prop-types';

import { LevelContext } from './levelContext';

import Heading from '../Heading';

export default function Section({
  id,
  sections,
  children,
  level,
}) {
  return (
    <section id={id}>
      <LevelContext.Provider value={level}>
        <Heading>{sections[id].name}</Heading>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
Section.propTypes = {
  id: propTypes.string.isRequired,
  sections: propTypes.instanceOf(Object).isRequired,
  children: propTypes.node,
  level: propTypes.number,
};
Section.defaultProps = {
  level: 2,
  children: null,
};
