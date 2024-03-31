import React from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import './projects.css';

import CofferDeckBoxImage from './DeckBox/coffer-deck-box.jpg';
import AudioSensorSupportImage from './AudioSensorSupport/audio-sensor-support.jpg';

const PROJECTS = [
  {
    name: 'Coffer Deck Box',
    image: CofferDeckBoxImage,
  },
  {
    name: 'Audio Sensor Support',
    image: AudioSensorSupportImage,
  },
];

function pathToName(pathSegment) {
  return pathSegment
    .split('-')
    .map((word) => word.substring(0, 1).toUpperCase().concat(word.substring(1)))
    .join(' ');
}
function nameToPath(name) {
  return name.toLowerCase().replaceAll(' ', '-');
}

function ProjectPage() {
  const { projectName } = useParams();
  return (
    <h1>{pathToName(projectName)}</h1>
  );
}

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <section key={project.name}>
            <Link to={nameToPath(project.name)}>
              <h2>{project.name}</h2>
              <img alt="" src={project.image} />
            </Link>
          </section>
        ))}
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
