import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

const markdown = `
## Experience
### Columbia Physics Lab Course Assistant
- Design, prototype and test equipment for experiments.
- Troubleshoot lab equipment and perform repairs.
### TOM Makeathon Maker
- Interview users to aid research.
- Ideate solutions and draw them.
- Create the cardboard and aluminum protoypes.
## Skills
- Solidworks.
- Python.
- Matlab.
- 3D printing.
- Laser cutting.
- Laser engraving.
- Machining.
## Courses
- Computer Graphics & Design.
- Heat Transfer.
- Computer Aided Design.
- Mechanics of Solids (Focusing on FEA).
- Human-Centered Design.`;

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Achilles is a product engineer committed to human centered design. He seeks to
        improve his design skills with socially impactful projects like
        {' '}
        <Link to="/projects/thimble/tst">the Thimble.</Link>
        {' '}
        He is a graduate of Columbia University with a B.S. in mechanical engineering and has
        worked with various educational spaces at Columbia to design and develop educational
        devices with them.
      </p>
      <Markdown>{markdown}</Markdown>
    </>
  );
}
