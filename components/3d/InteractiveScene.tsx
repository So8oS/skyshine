/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  KeyboardControls,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { Model } from "@/components/3d/models/droneModel";
import { Building } from "@/components/3d/models/building";
import Particles from "@/components/3d/models/interactiveParticals";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import localFont from "next/font/local";

const font = localFont({
  src: "../../app/fonts/PressStart2P-Regular.ttf",
  variable: "--font-press-start-2p",
});

const InteractiveScene = () => {
  const [popUp, setPopUp] = useState(true);
  useEffect(() => {
    const handleArrowClick = (event: KeyboardEvent) => {
      event.preventDefault();
    };
    window.addEventListener("keydown", handleArrowClick);
    return () => {
      window.removeEventListener("keydown", handleArrowClick);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <KeyboardControls
        map={[
          { name: "left", keys: ["ArrowLeft"] },
          { name: "right", keys: ["ArrowRight"] },
          { name: "upward", keys: ["ArrowUp"] },
          { name: "downward", keys: ["ArrowDown"] },
          { name: "emitParticles", keys: ["Space"] },
        ]}
      >
        <Canvas camera={{ position: [3, 8, 10] }}>
          <Environment preset="sunset" />

          <ambientLight intensity={1} />
          {/* <directionalLight position={[10, 10, 5]} intensity={10} />
          <directionalLight position={[10, 10, -5]} intensity={10} /> */}

          <Interactive />
        </Canvas>
      </KeyboardControls>

      {/* Joystick Container */}
      <div
        id="joystick-container"
        className="absolute bottom-24 left-8 w-32 h-32 bg-black/80 rounded-full xl:hidden"
      />

      {/* Rotation, Vertical Movement, and Emit Particles Buttons */}
      <div className="absolute bottom-24 right-8 flex flex-col gap-4 xl:hidden">
        {/* <button
          id="rotate-left"
          className="md:w-16 md:h-16 w-12 h-12  bg-black/80 font-bold  rounded-full flex items-center justify-center shadow-md transition-transform duration-200 active:scale-90"
        >
          ←
        </button>
        <button
          id="rotate-right"
          className="md:w-16 md:h-16 w-12 h-12  bg-black/80 font-bold  rounded-full flex items-center justify-center shadow-md transition-transform duration-200 active:scale-90"
        >
          →
        </button>
        <button
          id="move-up"
          className="md:w-16 md:h-16 w-12 h-12  bg-black/80 font-bold rounded-full flex items-center justify-center shadow-md transition-transform duration-200 active:scale-90"
        >
          ⬆
        </button>
        <button
          id="move-down"
          className="md:w-16 md:h-16 w-12 h-12  bg-black/80 font-bold rounded-full flex items-center justify-center shadow-md transition-transform duration-200 active:scale-90"
        >
          ⬇
        </button> */}
        <button
          id="emit-particles"
          className=" w-32 h-32 text-4xl  bg-black/80 font-bold  rounded-full flex items-center justify-center shadow-md transition-transform duration-200 active:scale-90"
        >
          💨
        </button>
      </div>
      {/* add controlls for players to know how to play */}
      <div className="absolute top-10 left-8 p-4 bg-white/10 rounded-lg text-white xl:block hidden">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded mr-2">
            ↑
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded mr-2">
            ↑
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded mr-2">
            ←
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded">
            →
          </div>
          <span className="ml-2"> Move</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-16 h-8 bg-gray-800 rounded mr-2">
            Space
          </div>
          <span className="ml-2">Spray water</span>
        </div>
        {/* <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded mr-2">
            ←
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded">
            →
          </div>
          <span className="ml-2">Rotate</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded mr-2">
            ↑
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded mr-2">
            ↓
          </div>
          <span className="ml-2">Move up and down</span>
        </div> */}
      </div>
      {popUp && (
        <div className="absolute h-full  w-full flex items-center justify-center top-0 left-0 bg-black/80 ">
          <div
            className=" p-6 rounded-lg text-white shadow-lg flex flex-col items-center justify-center"
            style={{
              fontFamily: font.style.fontFamily,
            }}
          >
            <h1 className="lg:text-4xl text-lg font-bold mb-2 text-center">
              CLEAN THE SPOTS ALL OVER THE BUILDING
            </h1>
            <p className="mb-4 lg:text-xl text-sm"></p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              onClick={() => setPopUp(false)}
            >
              Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveScene;

const Interactive = () => {
  const [position, setPosition] = useState(new THREE.Vector3(0, 30, 5));
  const [rotation, setRotation] = useState(new THREE.Euler(0, 0, 0));
  const [velocity, setVelocity] = useState(new THREE.Vector3()); // Smooth movement control
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const nozzleRef = useRef();
  const smoothedCameraPosition = useRef(new THREE.Vector3(3, 8, 10));
  const smoothedCameraTarget = useRef(new THREE.Vector3());
  const [emitterActive, setEmitterActive] = useState(false);
  const joystickState = useRef({ leftRight: 0, upDown: 0 });
  const rotationState = useRef({ rotateLeft: false, rotateRight: false });
  const [collisionDetected, setCollisionDetected] = useState(false);

  const { scene } = useGLTF("./building.gltf");
  const buildingBoundingBox = new THREE.Box3().setFromObject(scene);

  const BUILDING_CONFIG = {
    position: [0, -60, -40],
    boundary: {
      size: [
        buildingBoundingBox.max.x - buildingBoundingBox.min.x,
        buildingBoundingBox.max.y - buildingBoundingBox.min.y,
        buildingBoundingBox.max.z - buildingBoundingBox.min.z,
      ],
    },
  };

  useEffect(() => {
    const initListeners = async () => {
      const nipplejs = await import("nipplejs");
      const joystickManager = nipplejs.create({
        zone: document.getElementById("joystick-container"),
        mode: "static",
        position: { left: "50%", top: "50%" },
        color: "#6b7280",
        size: 120,
      });

      joystickManager.on("move", (evt, data) => {
        if (data.direction) {
          joystickState.current.leftRight = THREE.MathUtils.clamp(
            data.vector.x,
            -1,
            1
          );
          joystickState.current.upDown = THREE.MathUtils.clamp(
            data.vector.y,
            -1,
            1
          );
        }
      });

      joystickManager.on("end", () => {
        joystickState.current.leftRight = 0;
        joystickState.current.upDown = 0;
      });

      return () => {
        joystickManager.destroy();
      };
    };

    initListeners();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeKeys((state) => {
      if (state.emitParticles) {
        setEmitterActive((prev) => !prev);
      }
    });

    // Add event listener for the spray button
    const sprayButton = document.getElementById("emit-particles");
    const handleSprayButtonClick = () => {
      setEmitterActive((prev) => !prev);
    };
    sprayButton.addEventListener("click", handleSprayButtonClick);

    return () => {
      unsubscribe();
      sprayButton.removeEventListener("click", handleSprayButtonClick);
    };
  }, [subscribeKeys]);

  useFrame((state, delta) => {
    const { left, right, upward, downward, rotateLeft, rotateRight } =
      getKeys();

    const maxSpeed = 17;
    const acceleration = 17 * delta;
    const friction = 0.85;

    // Compute target velocity from joystick and keyboard inputs
    const targetVelocity = new THREE.Vector3(
      (left ? -1 : right ? 1 : joystickState.current.leftRight) * maxSpeed, // Left/Right movement
      (upward ? 1 : downward ? -1 : joystickState.current.upDown) * maxSpeed, // Up/Down movement
      0 // No forward/backward movement
    );

    // Apply acceleration and smooth out movement
    velocity.lerp(targetVelocity, acceleration);
    velocity.multiplyScalar(friction);

    // Compute new position
    const newPosition = position
      .clone()
      .add(velocity.clone().multiplyScalar(delta));

    // Collision detection
    const [bx, by, bz] = BUILDING_CONFIG.position;
    const [bbw, bbh, bbd] = BUILDING_CONFIG.boundary.size;
    const droneRadius = 2.5;

    const wouldCollide =
      newPosition.x + droneRadius > bx - bbw / 2 &&
      newPosition.x - droneRadius < bx + bbw / 2 &&
      newPosition.z + droneRadius > bz - bbd / 2 &&
      newPosition.z - droneRadius < bz + bbd / 2;

    if (wouldCollide) {
      setCollisionDetected(true);
    } else {
      setCollisionDetected(false);
      setPosition(newPosition);
    }

    // Smooth rotation
    // const rotateSpeed = 2 * delta;
    // const newRotation = rotation.clone();
    // if (rotateLeft || rotationState.current.rotateLeft)
    //   newRotation.y += rotateSpeed;
    // if (rotateRight || rotationState.current.rotateRight)
    //   newRotation.y -= rotateSpeed;
    // setRotation(newRotation);

    // Camera smoothing
    const cameraOffset = new THREE.Vector3(0, 4, 9);
    // const rotatedOffset = cameraOffset.clone().applyEuler(newRotation);
    const cameraPosition = newPosition.clone().add(cameraOffset);

    smoothedCameraPosition.current.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.current.lerp(newPosition, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition.current);
    state.camera.lookAt(smoothedCameraTarget.current);
  });

  const buildingRef = useRef<THREE.Object3D>(null);
  const dirtRefs = useRef<THREE.Object3D[]>([]);
  const removableObjects = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    if (dirtRefs.current.length > 0) {
      removableObjects.current = [...dirtRefs.current];
    }
  }, [dirtRefs.current]);

  return (
    <>
      <mesh position={position} rotation={rotation}>
        <Model nozzleRef={nozzleRef} />
      </mesh>
      <Particles
        nozzleRef={nozzleRef}
        emitterName="ParticleEmitter"
        emitterActive={emitterActive}
        removableObjects={removableObjects}
      />
      <Building
        position={BUILDING_CONFIG.position}
        buildingRef={buildingRef}
        dirtRefs={dirtRefs}
      />

      {/* Building boundary visualization */}
      <mesh
        position={[
          BUILDING_CONFIG.position[0],
          BUILDING_CONFIG.position[1] * 0.08,
          BUILDING_CONFIG.position[2],
        ]}
        visible={process.env.NODE_ENV === "development"}
      >
        <boxGeometry args={BUILDING_CONFIG.boundary.size} />
        <meshBasicMaterial color="red" wireframe opacity={1} transparent />
      </mesh>

      <Html position={[position.x, position.y + 3, position.z]} center>
        {collisionDetected && (
          <div className="text-white md:text-lg text-sm bg-black lg:p-5 p-3 rounded-lg md:w-60 w-40 text-center font-bold bg-opacity-80">
            <h1>Can&apos;t move closer to the building</h1>
          </div>
        )}
      </Html>
    </>
  );
};
