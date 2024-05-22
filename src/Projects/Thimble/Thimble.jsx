import React from 'react';
import propTypes from 'prop-types';

import PURPOSE_IMAGE from './thimble-purpose.webp';
import SUBSYSTEMS_IMAGE from './thimble-subsystems.webp';
import OPERATION_IMAGE from './thimble-operation.webp';

import './thimble.css';

export const SECTIONS = {
  'our-purpose': { name: ['Our Purpose', 'Preemptive Leak Detection'] },
  'how-it-works': { name: ['How It Works', 'Thimble Subsystems'] },
  operation: { name: ['Operation', 'Fire Hydrant Entry'] },
  testing: { name: 'Thimble Testing' },
  'cad-models': { name: 'CAD Models' },
};

function Header({ children }) {
  if (Array.isArray(children)) {
    return <h2>{children.map((child) => <span key={child}>{child}</span>)}</h2>;
  }
  return <h2>{children}</h2>;
}
Header.propTypes = {
  children: propTypes.node.isRequired,
};

function Section({ id, children }) {
  return (
    <section id={id}>
      <Header>{SECTIONS[id].name}</Header>
      {children}
    </section>
  );
}
Section.propTypes = {
  id: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default function Thimble() {
  return (
    <div className="thimble">
      <Section id="our-purpose">
        <div className="grid">
          <img
            src={PURPOSE_IMAGE}
            alt={`The Thimble. It is roughly cylindrical,
            with a propeller on one end and a wire attached to the other`}
          />
          <p>
            {`New York City loses 16-24% of its water supply every year due to leakages,
            waste, and metering miscalculations. The city experiences over 400 main breaks
            a year, and pipe replacement is too slow to keep up with our aging infrastructure.`}
          </p>
          <p>
            {`To detect and address these leaks before they occur, we developed the Thimble.
            The Thimble is a submersible device that enters NYC's water mains and returns a
            video feed of the conditions of the pipe network from the inside.`}
          </p>
        </div>
      </Section>
      <Section id="how-it-works">
        <div className="grid">
          <img
            src={SUBSYSTEMS_IMAGE}
            alt="The Thimble with one end removed, revealing wires inside."
          />
          <ol>
            <li>
              <h3>01. Central Propeller</h3>
              {`The Thimble is propelled by an ApisQueen Underwater Thruster, which pushes water
              back through each of four side channels. These release the water at a 45 degree
              angle, allowing half of the thrust to advance the Thimble, and the other half to
              be used for turning and adjustment.`}
            </li>
            <li>
              <h3>02. Butterfly Valves</h3>
              {`Each side channel features a butterfly valve, which can rotate to block flow
              through the channel or allow water to pass through unhindered. Each valve is
              controlled by a Miuzei 9g servo motor, stored safely in the Thimble's waterproof
              back chamber.`}
            </li>
            <li>
              <h3>03. Camera and IMU</h3>
              {`The Thimble's sensor suite includes both a camera and an Inertial Measurement
              Unit (IMU). The camera looks out through an acrylic window and is illuminated by
              an integrated LED, recording a video feed for operators to review. The IMU allows
              operators to monitor the acceleration and tilt of the thimble for the duration of
              its journey.`}
            </li>
            <li>
              <h3>04. Tether and Spool</h3>
              {`At all times, the Thimble is connected to the surface using a tether. The tether
              features both a steel cable for strength, and wiring to power and relay data to
              each other subsystem. This means it cannot be lost in the city's subterranean
              water mains, and it can report its signal and receive live controls from its operators.`}
            </li>
          </ol>
        </div>
      </Section>
      <Section id="operation">
        <img
          src={OPERATION_IMAGE}
          alt={`A screen is placed before a cardboard imitation of a fire hydrant.
              On screen is a video feed from the Thimble, as well as various measurements.`}
        />
        <p>
          {`The Thimble can enter the city's water mains through any street-level fire hydrant.
          The operator, a DEP employee, removes the hydrant's top cap and screws the thimble's
          spool on in its place.`}
        </p>
        <p>
          {`The Thimble then detaches from its spool and drops down through the hydrant. It enters
          first into the adjoining branch valve, and then deeper into the water main network.
          All the while, it reports a live video feed using its camera for operators to analyze
          and search for defects.`}
        </p>
        <p>
          {`When the Thimble's journey is over, it can be recalled by re-spooling its tether. The
          tether always remains attached to both the Thimble and the hydrant cap, allowing the
          thimble to be powered, relay video feed, and be pulled back to the surface without
          any risk of being lost.`}
        </p>
      </Section>
      <Section id="testing">
        <p>
          {`To be sure the Thimble works as intended, it was put through a rigorous testing regimen.
          All electronics are fully wired and operational, running software from the integrated
          Raspberry Pi. The back chamber is waterproofed using O-rings, epoxy, sealing screws,
          gaskets, and cable glands, and has been verified through submergence tests. When swabbed
          with a paper towel, the interior chamber comes out completely dry.`}
        </p>
      </Section>
      <Section id="cad-models">
        <p>
          {`Building a 3D model of the Thimble was essential for making our design a reality. These
          renderings show both the 3D-printed frames designed using Solidworks, and assemblies
          featuring all other integrated components.`}
        </p>
      </Section>
    </div>
  );
}
