import React from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Section from '../Section';

import './projects.css';

import CofferDeckBoxImage from './DeckBox/coffer-deck-box.jpg';
import AudioSensorSupportImage from './AudioSensorSupport/audio-sensor-support.jpg';

import DeckBox from './DeckBox';

const PROJECTS = {
  'coffer-deck-box': {
    name: 'Coffer Deck Box',
    image: CofferDeckBoxImage,
    details: DeckBox,
  },
  'audio-sensor-support': {
    name: 'Audio Sensor Support',
    image: AudioSensorSupportImage,
  },
};

function ProjectPage() {
  const { projectName } = useParams();
  const { name, image, details } = PROJECTS[projectName];
  return (
    <>
      <h1>{name}</h1>
      <img alt="" src={image} />
      {details.map((section) => <Section key={section.title} section={section} level={2} />)}
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-list">
        {Object.keys(PROJECTS).map((key) => {
          const { name, image } = PROJECTS[key];
          return (
            <section key={key}>
              <Link to={key}>
                <h2>{name}</h2>
                <img alt="" src={image} />
              </Link>
            </section>
          );
        })}
      </div>
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
