import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

import TableOfContents from '../TableOfContents';
import Page404 from '../404';

import './projects.css';
import { ProjectContext } from './ProjectContext';

import PennyDeckBoxImage from './DeckBox/coffer-deck-box.jpg';
import AudioSensorSupportImage from './AudioSensorSupport/audio-sensor-support.jpg';
import ThimbleImage from './Thimble/thimble.jpg';

import ThimbleReport from './Thimble/thimble_report.pdf';

import DeckBox, { SECTIONS as DeckBoxSections } from './DeckBox/DeckBox';
import Thimble, { SECTIONS as ThimbleSections } from './Thimble/Thimble';
import AudioSensorSupport, {
  SECTIONS as AudioSensorSupportSections,
} from './AudioSensorSupport/AudioSensorSupport';

/* eslint no-unused-vars: warn */
const PROJECTS = {
  'penny-deck-box': {
    name: 'The Penny Deck Box: An Open-Source Deck Box',
    image: PennyDeckBoxImage,
    Component: DeckBox,
    sections: DeckBoxSections,
  },
  /*
  'audio-sensor-support': {
    name: 'Audio Sensor Support',
    image: AudioSensorSupportImage,
    Component: AudioSensorSupport,
    sections: AudioSensorSupportSections,
  },
  */
  thimble: {
    name: 'The Thimble: Innovating Water Pipe Maintenance',
    image: ThimbleImage,
    Component: Thimble,
    sections: ThimbleSections,
    files: {
      Report: ThimbleReport,
    },
  },
};

function FileDownloadLinks({ files }) {
  if (!files) return null;
  return (
    <div className="file-download-links">
      {Object.keys(files).map((key) => (
        <a href={files[key]}>
          <button type="button" key={key}>
            <DownloadIcon />
            {`Download ${key}`}
          </button>
        </a>
      ))}
    </div>
  );
}
FileDownloadLinks.propTypes = { files: propTypes.instanceOf(Object) };
FileDownloadLinks.defaultProps = { files: undefined };

function ProjectPage() {
  const { projectName } = useParams();
  if (!PROJECTS[projectName]) return <Page404 />;
  const {
    name,
    image,
    sections,
    Component,
    files,
  } = PROJECTS[projectName];
  const value = useMemo(() => ({ name, sections }), [projectName]);
  return (
    <ProjectContext.Provider value={value}>
      <h1>{name}</h1>
      <TableOfContents sections={sections} />
      <div className="image-and-links">
        <img alt="" src={image} />
        <FileDownloadLinks files={files} />
      </div>
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
