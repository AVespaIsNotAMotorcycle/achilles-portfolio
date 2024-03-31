import React from 'react';
import propTypes from 'prop-types';

const SECTIONS = [
  {
    title: 'Experience',
    body: [
      {
        title: 'Columbia Physics Lab Course Assistant',
        body: `Design, prototype and test equipment for experiments.
               Troubleshoot lab equipment and perform repairs.`,
      },
      {
        title: 'TOM Makeathon Maker',
        body: `Interview users to aid research.
               Ideate solutions and draw them.
               Create the cardboard and aluminum protoypes.`,
      },
    ],
  },
  {
    title: 'Skills',
    body: `Solidworks.
           Python.
           Matlab.
           3D printing.
           Laser cutting.
           Laser engraving.
           Machining.`,
  },
  {
    title: 'Courses',
    body: `Computer Graphics & Design.
           Heat Transfer.
           Computer Aided Design.
           Mechanics of Solids (Focusing on FEA).
           Human-Centered Design.`,
  },
];

function Heading({ text, level }) {
  switch (level) {
    case 6: return <h6>{text}</h6>;
    case 5: return <h5>{text}</h5>;
    case 4: return <h4>{text}</h4>;
    case 3: return <h3>{text}</h3>;
    case 2: return <h2>{text}</h2>;
    default: return null;
  }
}
Heading.propTypes = {
  text: propTypes.string.isRequired,
  level: propTypes.number.isRequired,
};

function Section({ section, level }) {
  const { title, body } = section;
  console.log(section);
  return (
    <section>
      <Heading level={level} text={title} />
      {typeof body === 'string' && <p>{body}</p>}
      {Array.isArray(body)
        && body.map((chunk) => <Section key={chunk.title} level={level + 1} section={chunk} />)}
    </section>
  );
}
Section.propTypes = {
  section: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.oneOfType([
      propTypes.string,
      propTypes.arrayOf(
        propTypes.instanceOf(Object),
      ),
    ]),
  }).isRequired,
  level: propTypes.number.isRequired,
};

export default function About() {
  return (
    <>
      <h1>About</h1>
      {SECTIONS.map((section) => <Section key={section.title} level={2} section={section} />)}
    </>
  );
}
