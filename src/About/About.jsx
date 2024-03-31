import React from 'react';

import Section from '../Section';

const SECTIONS = [
  {
    title: 'Experience',
    body: [
      {
        title: 'Columbia Physics Lab Course Assistant',
        body: `- Design, prototype and test equipment for experiments.
- Troubleshoot lab equipment and perform repairs.`,
      },
      {
        title: 'TOM Makeathon Maker',
        body: `- Interview users to aid research.
- Ideate solutions and draw them.
- Create the cardboard and aluminum protoypes.`,
      },
    ],
  },
  {
    title: 'Skills',
    body: `- Solidworks.
- Python.
- Matlab.
- 3D printing.
- Laser cutting.
- Laser engraving.
- Machining.`,
  },
  {
    title: 'Courses',
    body: `- Computer Graphics & Design.
- Heat Transfer.
- Computer Aided Design.
- Mechanics of Solids (Focusing on FEA).
- Human-Centered Design.`,
  },
];

export default function About() {
  return (
    <>
      <h1>About</h1>
      {SECTIONS.map((section) => <Section key={section.title} level={2} section={section} />)}
    </>
  );
}
