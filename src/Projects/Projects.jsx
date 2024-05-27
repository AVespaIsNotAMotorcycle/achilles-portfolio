import React, { useMemo } from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import TableOfContents from '../TableOfContents';
import Page404 from '../404';

import './projects.css';
import { ProjectContext } from './ProjectContext';

import PennyDeckBoxImage from './DeckBox/coffer-deck-box.jpg';
import AudioSensorSupportImage from './AudioSensorSupport/audio-sensor-support.jpg';
import ThimbleImage from './Thimble/thimble.jpg';

import DeckBox, { SECTIONS as DeckBoxSections } from './DeckBox/DeckBox';
import Thimble, { SECTIONS as ThimbleSections } from './Thimble/Thimble';
import AudioSensorSupport, {
  SECTIONS as AudioSensorSupportSections,
} from './AudioSensorSupport/AudioSensorSupport';

const PROJECTS = {
  'penny-deck-box': {
    name: 'The Penny Deck Box: An Open-Source Deck Box',
    image: PennyDeckBoxImage,
    Component: DeckBox,
    sections: DeckBoxSections,
  },
  'audio-sensor-support': {
    name: 'Audio Sensor Support',
    image: AudioSensorSupportImage,
    Component: AudioSensorSupport,
    sections: AudioSensorSupportSections,
  },
  thimble: {
    name: 'The Thimble: Innovating Water Pipe Maintenance',
    image: ThimbleImage,
    Component: Thimble,
    sections: ThimbleSections,
  },
};

function ProjectPage() {
  const { projectName } = useParams();
  if (!PROJECTS[projectName]) return <Page404 />;
  const {
    name,
    image,
    sections,
    Component,
  } = PROJECTS[projectName];
  const value = useMemo(() => ({ name, sections }), [projectName]);
  return (
    <ProjectContext.Provider value={value}>
      <h1>{name}</h1>
      <TableOfContents sections={sections} />
      <img alt="" src={image} />
      <Component />
      {/* details.map((section) => <Section key={section.title} section={section} level={2} />) */}
    </ProjectContext.Provider>
  );
}

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <ul className="projects-list">
        {Object.keys(PROJECTS).map((key) => {
          const { name, image } = PROJECTS[key];
          return (
            <li key={key}>
              <Link to={key}>
                <img alt="" src={image} />
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default function Projects() {
  return (
    <Routes>
      <Route index element={<ProjectsPage />} />
      <Route path=":projectName" element={<ProjectPage />} />
    </Routes>
  );
}
