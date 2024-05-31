import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import './video.css';

/* eslint jsx-a11y/media-has-caption: warn */
export default function Video({ source }) {
  if (true) return <video src={source} controls />;

  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const play = () => { videoRef.current.play(); };
  const pause = () => { videoRef.current.pause(); };
  const enterFullscreen = () => { setFullscreen(true); };
  const exitFullscreen = () => { setFullscreen(false); };
  const calculateProgress = () => {
    if (!videoRef.current) return 0;
    return (videoRef.current.currentTime / videoRef.current.duration) * 100;
  };
  const changeTime = ({ target }) => {
    videoRef.current.currentTime = (target.value * videoRef.current.duration) / 100;
  };

  return (
    <div className={`video-wrapper ${playing ? 'playing' : 'paused'}`}>
      <video
        src={source}
        ref={videoRef}
        onPause={() => { setPlaying(false); }}
        onPlay={() => { setPlaying(true); }}
        onTimeUpdate={() => { setProgress(calculateProgress()); }}
        onClick={playing ? pause : play}
        controls
      />
      <controls>
        <button className="icon" type="button" onClick={playing ? pause : play}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <label style={{ '--value': `${progress}%` }} htmlFor={`${source}-time`} className="time-bar">
          Video time
          <input
            id={`${source}-time`}
            type="range"
            value={progress}
            min={0}
            max={100}
            onChange={changeTime}
          />
        </label>
        <button
          className="icon"
          type="button"
          onClick={fullscreen ? enterFullscreen : exitFullscreen}
        >
          {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </button>
      </controls>
    </div>
  );
}
Video.propTypes = { source: propTypes.string.isRequired };
