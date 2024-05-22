import React from 'react';

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
  return <div />;
}