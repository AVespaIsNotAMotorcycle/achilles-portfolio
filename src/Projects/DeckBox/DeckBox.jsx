import React from 'react';

import Section from '../../Section';

export const SECTIONS = {
  research: {
    name: 'Research',
    descendants: {
      'design-challenge': { name: 'Design Challenge' },
      'existing-solutions': { name: 'Existing Solutions' },
      'major-takeaways': { name: 'Major Takeaways' },
      'design-solution': { name: 'Design Solution' },
    },
  },
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
      <Section id="research" level={2}>
        High quality boxes can be cost prohibitive for low income Magic The Gathering players.
        More affordable boxes often sacrifice user-experience and security of the cards.
        <Section id="design-challenge" level={3}>
          Design a deck box for magic the gathering which is affordable and accessible without
          sacrificing features found in expensive boxes.
        </Section>
        <Section id="existing-solutions" level={3}>
          Tolarian Community College is a highly respected Deck Box reviewer in the Magic
          community, so for this project all 40+ of their videos were used to understand Magic
          player’s needs and existing solutions.
        </Section>
        <Section id="major-takeaways" level={3}>
          <ul>
            <li>Bigger boxes are generally better</li>
            <li>
              Deck boxes protect cards, organize them, function as a game piece, and allow
              players to express themselves.
            </li>
            <li>
              Different players have unique size requirements but 100 card boxes are most popular
            </li>
          </ul>
        </Section>
        <Section id="design-solution" level={3}>
          An open source deck box that is easy for individuals to assemble at home maximizes the
          user experience while minimizing cost.
        </Section>
      </Section>
      <Section id="ideation" level={2} />
      <Section id="prototyping" level={2}>
        Lorem ipsum dolor sit amet.
        <Section id="manila-paper" level={3}>
          Lorem ipsum dolor sit amet.
        </Section>
        <Section id="cardboard" level={3}>
          Lorem ipsum dolor sit amet.
        </Section>
        <Section id="CAD" level={3}>
          Lorem ipsum dolor sit amet.
        </Section>
      </Section>
    </div>
  );
}
