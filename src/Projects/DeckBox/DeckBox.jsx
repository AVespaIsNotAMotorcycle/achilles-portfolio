import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import Section from '../../Section';
import Image from '../../Image';

import './deckBox.css';

// ==== RESEARCH ====
import COMPETITOR_BOX_ONE from './research/competitor-1.png';
import COMPETITOR_BOX_TWO from './research/competitor-2.png';
import COMPETITOR_BOX_THREE from './research/competitor-3.png';
import COMPETITOR_BOX_FOUR from './research/competitor-4.png';

import TOLARIAN_THUMBNAIL from './research/tolarian-thumbnail.png';
import TOLARIAN_LOGO from './research/tolarian-logo.png';

import WOODEN_BOX from './research/wooden-box.png';
import PHYREXIAN_BOX from './research/phyrexian-box.png';
import ULTIMATE_GUARD_BOX from './research/ultimate-guard-box.png';

// ==== IDEATION ====
import SKETCHES_ONE from './ideation/sketches-1.jpg';
import SKETCHES_THREE from './ideation/sketches-3.jpg';
import SKETCHES_FIVE from './ideation/sketches-5.jpg';

// ==== MANILA ===
import MANILA_1 from './prototyping/manila/1.jpg';
import MANILA_2 from './prototyping/manila/2.jpg';
import MANILA_3 from './prototyping/manila/3.jpg';
import MANILA_4 from './prototyping/manila/4.jpg';
import MANILA_5 from './prototyping/manila/5.jpg';
import MANILA_6 from './prototyping/manila/6.jpg';

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
        <div className="gallery">
          <Image source={COMPETITOR_BOX_ONE} alt="" />
          <Image source={COMPETITOR_BOX_TWO} alt="" />
          <Image source={COMPETITOR_BOX_THREE} alt="" />
          <Image source={COMPETITOR_BOX_FOUR} alt="" />
        </div>
        <Section id="design-challenge" level={3}>
          Design a deck box for magic the gathering which is affordable and accessible without
          sacrificing features found in expensive boxes.
        </Section>
        <Section id="existing-solutions" level={3}>
          <div className="gallery two">
            <img src={TOLARIAN_THUMBNAIL} alt="" />
            <img src={TOLARIAN_LOGO} alt="" />
          </div>
          Tolarian Community College is a highly respected Deck Box reviewer in the Magic
          community, so for this project all 40+ of their videos were used to understand Magic
          player’s needs and existing solutions.
          <div className="gallery three">
            <img src={WOODEN_BOX} alt="" />
            <img src={PHYREXIAN_BOX} alt="" />
            <img src={ULTIMATE_GUARD_BOX} alt="" />
          </div>
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
      <Section id="ideation" level={2}>
        <Image source={SKETCHES_ONE} alt="" />
        <Image source={SKETCHES_THREE} alt="" />
        <Image source={SKETCHES_FIVE} alt="" />
      </Section>
      <Section id="prototyping" level={2}>
        <Section id="manila-paper" level={3}>
          <ol>
            <li>
              <div>
                <h4>
                  <ClearIcon />
                  Sides as the Lid
                </h4>
                Could not securely fit the cards
              </div>
              <Image source={MANILA_1} alt="" />
              <Image source={MANILA_2} alt="" />
            </li>
            <li>
              <div>
                <h4>
                  <ClearIcon />
                  Hinge with Side Flaps
                </h4>
                Required too much continuous material
              </div>
              <Image source={MANILA_3} alt="" />
              <Image source={MANILA_4} alt="" />
            </li>
            <li>
              <div>
                <h4>
                  <CheckIcon />
                  Sliding Rail Design
                </h4>
                <ul>
                  <li>Keeps cards secure</li>
                  <li>Materially efficient</li>
                  <li>Mechanically simple</li>
                </ul>
              </div>
              <Image source={MANILA_5} alt="" />
              <Image source={MANILA_6} alt="" />
            </li>
          </ol>
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
