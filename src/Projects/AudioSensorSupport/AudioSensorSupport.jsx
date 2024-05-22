import React from 'react';

import Section from '../../Section';

export const SECTIONS = {
  research: { name: 'Research' },
};

export default function AudioSensorSupport() {
  return (
    <div className="audio-sensor-support">
      <Section id="research" level={2} />
    </div>
  );
}
