/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useEffect, useRef } from "react";
import { Gltf, OrbitControls } from "@react-three/drei";
import Particles from "@/components/3d/models/particales";
import { Model } from "@/components/3d/models/droneModel";
import { getProject } from "@theatre/core"; // Ensure @theatre/core is imported
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider } from "@theatre/r3f";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

import sequance from "../../public/state-2.json";
import { Canvas } from "@react-three/fiber";

if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const demoSheet = getProject("Demo Project", { state: sequance }).sheet(
  "Demo Sheet"
);

demoSheet.object("Emitter 1", { active: false });
demoSheet.object("Emitter 2", { active: false });
demoSheet.object("Emitter 3", { active: false });
demoSheet.object("Emitter 4", { active: false });

export default function Scene() {
  const nozzleRef1 = useRef<THREE.Group | null>(null); // Nozzle for Drone 1
  const nozzleRef2 = useRef<THREE.Group | null>(null); // Nozzle for Drone 2
  const nozzleRef3 = useRef<THREE.Group | null>(null); // Nozzle for Drone 3
  const nozzleRef4 = useRef<THREE.Group | null>(null); // Nozzle for Drone 4
  const collisionPlaneRef = useRef<THREE.Mesh | null>(null);
  const sequence = demoSheet.sequence;

  useEffect(() => {
    const playSequence = async () => {
      if (sequence) {
        try {
          setTimeout(() => {
            sequence.play({
              iterationCount: Infinity, // Loop the sequence
              direction: "normal", // Play forward
            });
            console.log("Sequence started playing.");
          }, 1000);
        } catch (error) {
          console.error("Error starting the sequence:", error);
        }
      } else {
        console.warn("No sequence found on the sheet.");
      }
    };

    playSequence();
  }, [sequence]);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 90,
        zoom: 1.5,
        position: [58, 31, 15],
        rotation: [-0.270714722718148, 0.9786868133706421, 0.22633702725243326],
      }}
    >
      <SheetProvider sheet={demoSheet}>
        {/* <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[-6, 50, -20]}
            fov={90}
          /> */}
        {/* <Environment files="/w.jpg" background blur={0} /> */}

        <OrbitControls
          target={[10, 25, -12]}
          enableZoom={false}
          enablePan={false}
          minDistance={0}
          maxDistance={500}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1.2}
          minPolarAngle={0} // Slightly above the horizontal plane
          maxPolarAngle={Math.PI / 2 + 0.4} // Slightly below the horizontal plane
          minAzimuthAngle={-Infinity} // Allow full horizontal rotation
          maxAzimuthAngle={Infinity} // Allow full horizontal rotation
        />

        <e.directionalLight
          theatreKey="Light"
          position={[10, 10, 5]}
          intensity={10}
        />
        {/* Particle Systems */}
        <Particles
          nozzleRef={nozzleRef1}
          emitterName="Emitter 1"
          collisionPlaneRef={collisionPlaneRef}
          demoSheet={demoSheet}
        />
        <Particles
          nozzleRef={nozzleRef2}
          emitterName="Emitter 2"
          collisionPlaneRef={collisionPlaneRef}
          demoSheet={demoSheet}
        />
        <Particles
          nozzleRef={nozzleRef3}
          emitterName="Emitter 3"
          collisionPlaneRef={collisionPlaneRef}
          demoSheet={demoSheet}
        />
        <Particles
          nozzleRef={nozzleRef4}
          emitterName="Emitter 4"
          collisionPlaneRef={collisionPlaneRef}
          demoSheet={demoSheet}
        />

        {/* Drone Models */}
        <e.mesh
          position={[5, 10, 0]}
          theatreKey="Drone1"
          scale={[2.075, 2.075, 2.075]}
        >
          <Model nozzleRef={nozzleRef1} />
        </e.mesh>
        <e.mesh
          position={[0, 10, 5]}
          theatreKey="Drone2"
          scale={[2.075, 2.075, 2.075]}
        >
          <Model nozzleRef={nozzleRef2} />
        </e.mesh>
        <e.mesh
          position={[0, 10, 5]}
          theatreKey="Drone3"
          scale={[2.075, 2.075, 2.075]}
        >
          <Model nozzleRef={nozzleRef3} />
        </e.mesh>
        <e.mesh
          position={[0, 10, 5]}
          theatreKey="Drone4"
          scale={[2.075, 2.075, 2.075]}
        >
          <Model nozzleRef={nozzleRef4} />
        </e.mesh>
        <e.mesh position={[0, 0, 0]} theatreKey="Building">
          <Gltf src="/building.gltf" scale={[0.5, 0.5, 0.5]} />
        </e.mesh>
        <Environment preset="sunset" />
      </SheetProvider>
    </Canvas>
  );
}
