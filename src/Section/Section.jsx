import React, { useContext, useMemo } from 'react';
import propTypes from 'prop-types';

import { LevelContext } from './levelContext';

import { ProjectContext } from '../Projects/ProjectContext';

import Heading from '../Heading';

function getParentSections(sections, lineage) {
  if (lineage.length > 0) return getParentSections(sections[lineage[0]], lineage.slice(1));
  return sections;
}

function getName(sections, lineage, id) {
  const parent = getParentSections(sections, lineage);
  if (parent.descendants) return parent.descendants[id].name;
  return parent[id].name;
}

export default function Section({
  id,
  children,
  level,
}) {
  const { sections } = useContext(ProjectContext);
  const { lineage } = useContext(LevelContext);
  const value = useMemo(() => ({ level, lineage: [...lineage, id] }), [id]);
  return (
    <section id={id}>
      <LevelContext.Provider value={value}>
        <Heading>{getName(sections, lineage, id)}</Heading>
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
