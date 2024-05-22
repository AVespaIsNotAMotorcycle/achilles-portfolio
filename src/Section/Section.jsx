import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { LevelContext } from './levelContext';

import { ProjectContext } from '../Projects/ProjectContext';

import Heading from '../Heading';

export default function Section({
  id,
  children,
  level,
}) {
  const { sections } = useContext(ProjectContext);
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
  children: propTypes.node,
  level: propTypes.number,
};
Section.defaultProps = {
  level: 2,
  children: null,
};
