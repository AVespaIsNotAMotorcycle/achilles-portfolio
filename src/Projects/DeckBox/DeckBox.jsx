import React from 'react';

import Section from '../../Section';

export const SECTIONS = {
  research: { name: 'Research' },
  ideation: { name: 'Ideation' },
  prototyping: {
    name: 'Prototyping',
    descendants: {
      'manila-paper': { name: 'Manila Paper' },
      cardboard: { name: 'Cardboard' },
      CAD: { name: 'CAD' },
    },
  },
};

export default function DeckBox() {
  return (
    <div className="deck-box">
      <Section id="prototyping">
        Lorem ipsum dolor sit amet.
        <Section id="manila-paper">
          Lorem ipsum dolor sit amet.
        </Section>
      </Section>
    </div>
  );
}
