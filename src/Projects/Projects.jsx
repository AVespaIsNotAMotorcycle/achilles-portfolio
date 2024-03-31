import React from 'react';
import { Link } from 'react-router-dom';

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

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <section key={project.name}>
            <Link to="coffer-deck-box">
              <h2>{project.name}</h2>
              <img alt="" src={project.image} />
            </Link>
          </section>
        ))}
      </div>
    </>
  );
}
