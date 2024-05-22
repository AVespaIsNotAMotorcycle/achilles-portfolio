import React from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
// import Markdown from 'react-markdown';

// import Section from '../Section';
import TableOfContents from '../TableOfContents';

import './projects.css';

import PennyDeckBoxImage from './DeckBox/coffer-deck-box.jpg';
import AudioSensorSupportImage from './AudioSensorSupport/audio-sensor-support.jpg';
import ThimbleImage from './Thimble/thimble.jpg';

import DeckBox from './DeckBox';
import Thimble, { SECTIONS as ThimbleSections } from './Thimble/Thimble';

const PROJECTS = {
  'penny-deck-box': {
    name: 'The Penny Deck Box: An Open-Source Deck Box',
    image: PennyDeckBoxImage,
    details: DeckBox,
  },
  'audio-sensor-support': {
    name: 'Audio Sensor Support',
    image: AudioSensorSupportImage,
    details: [],
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
  const {
    name,
    image,
    sections,
    Component,
  } = PROJECTS[projectName];
  return (
    <>
      <h1>{name}</h1>
      <TableOfContents sections={sections} />
      <img alt="" src={image} />
      <Component />
      {/* details.map((section) => <Section key={section.title} section={section} level={2} />) */}
    </>
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
