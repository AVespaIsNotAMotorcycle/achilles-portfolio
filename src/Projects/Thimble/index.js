const THIMBLE = `
## Our Purpose - Preemptive Leak Detection

New York City loses 16-24% of its water supply every year due to leakages,
waste, and metering miscalculations. The city experiences over 400 main breaks
a year, and pipe replacement is too slow to keep up with our aging infrastructure.

To detect and address these leaks before they occur, we developed the Thimble.
The Thimble is a submersible device that enters NYC's water mains and returns a
video feed of the conditions of the pipe network from the inside.

## How It Works - Thimble Subsystems

1. Central Propeller

    The Thimble is propelled by an ApisQueen Underwater Thruster, which pushes water
    back through each of four side channels. These release the water at a 45 degree
    angle, allowing half of the thrust to advance the Thimble, and the other half to
    be used for turning and adjustment.

2. Butterfly Valves

    Each side channel features a butterfly valve, which can rotate to block flow
    through the channel or allow water to pass through unhindered. Each valve is
    controlled by a Miuzei 9g servo motor, stored safely in the Thimble's waterproof
    back chamber.

3. Camera and IMU

    The Thimble's sensor suite includes both a camera and an Inertial Measurement
    Unit (IMU). The camera looks out through an acrylic window and is illuminated by
    an integrated LED, recording a video feed for operators to review. The IMU allows
    operators to monitor the acceleration and tilt of the thimble for the duration of
    its journey.

4. Tether and Spool

    At all times, the Thimble is connected to the surface using a tether. The tether
    features both a steel cable for strength, and wiring to power and relay data to
    each other subsystem. This means it cannot be lost in the city's subterranean
    water mains, and it can report its signal and receive live controls from its operators.

## Operation - Fire Hydrant Entry

The Thimble can enter the city's water mains through any street-level fire hydrant.
The operator, a DEP employee, removes the hydrant's top cap and screws the thimble's
spool on in its place.

The Thimble then detaches from its spool and drops down through the hydrant. It enters
first into the adjoining branch valve, and then deeper into the water main network.
All the while, it reports a live video feed using its camera for operators to analyze
and search for defects.

When the Thimble's journey is over, it can be recalled by re-spooling its tether. The
tether always remains attached to both the Thimble and the hydrant cap, allowing the
thimble to be powered, relay video feed, and be pulled back to the surface without
any risk of being lost.

## Thimble Testing

To be sure the Thimble works as intended, it was put through a rigorous testing regimen.
All electronics are fully wired and operational, running software from the integrated
Raspberry Pi. The back chamber is waterproofed using O-rings, epoxy, sealing screws,
gaskets, and cable glands, and has been verified through submergence tests. When swabbed
with a paper towel, the interior chamber comes out completely dry.

## CAD Models

Building a 3D model of the Thimble was essential for making our design a reality. These
renderings show both the 3D-printed frames designed using Solidworks, and assemblies
featuring all other integrated components.
`;

export default THIMBLE;
