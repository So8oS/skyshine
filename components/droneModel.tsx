/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
"use client";
import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    Bolt001_Black_0: THREE.Mesh;
    Bolt002_Black_0: THREE.Mesh;
    Bolt003_Black_0: THREE.Mesh;
    Bolt004_Black_0: THREE.Mesh;
    Circle_Grey_0: THREE.Mesh;
    Fan_3: THREE.Mesh;
    Circle002_Black_0001: THREE.Mesh;
    Circle003_Black_0001: THREE.Mesh;
    Fan_4: THREE.Mesh;
    Circle002_Black_0: THREE.Mesh;
    Circle003_Black_0: THREE.Mesh;
    Circle001_Grey_0: THREE.Mesh;
    Fan_1: THREE.Mesh;
    Circle004_Black_0001: THREE.Mesh;
    Circle005_Black_0001: THREE.Mesh;
    Fan_2: THREE.Mesh;
    Circle004_Black_0: THREE.Mesh;
    Circle005_Black_0: THREE.Mesh;
    Circle006_Black_0: THREE.Mesh;
    Circle007_Black_0: THREE.Mesh;
    Cube_Black_0: THREE.Mesh;
    Cube_Glass_0: THREE.Mesh;
    Plane_Grey_0: THREE.Mesh;
    Plane001_Black_0: THREE.Mesh;
  };
  materials: {
    Black: THREE.MeshStandardMaterial;
    Grey: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/drone.glb") as GLTFResult;
  const [startTilting, setStartTilting] = useState(false);
  const [tiltDirection, setTiltDirection] = useState(-1); // 1 for right, -1 for left
  const modelRef = React.useRef<THREE.Group>(null);

  // Add refs for the fan meshes
  const fan1Ref = React.useRef<THREE.Mesh>(null);
  const fan2Ref = React.useRef<THREE.Mesh>(null);
  const fan3Ref = React.useRef<THREE.Mesh>(null);
  const fan4Ref = React.useRef<THREE.Mesh>(null);

  useEffect(() => {
    // Start tilting after 4 seconds
    const timer = setTimeout(() => {
      setStartTilting(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useFrame(({ clock }) => {
    // Existing fan rotation
    if (fan1Ref.current) fan1Ref.current.rotation.z += 0.4;
    if (fan2Ref.current) fan2Ref.current.rotation.z += 0.4;
    if (fan3Ref.current) fan3Ref.current.rotation.z += 0.4;
    if (fan4Ref.current) fan4Ref.current.rotation.z += 0.4;

    // Tilting animation
    // if (startTilting && modelRef.current) {
    //   const tiltAmount = Math.sin(clock.getElapsedTime() - 4) * 0.5; // Smooth tilting motion
    //   modelRef.current.rotation.x = tiltAmount;
    //   setTiltDirection(-1);
    //   modelRef.current.rotation.x = tiltAmount;
    // }
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene" ref={modelRef}>
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.7}
        >
          <group
            name="4b25c189153f4be0b659a9c719531e98fbx"
            rotation={[Math.PI / 1.6, 2.8, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="Bolt001"
                position={[-103.87, 10.86, 79.198]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={96.739}
              >
                <mesh
                  name="Bolt001_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Bolt001_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                name="Bolt002"
                position={[-98.226, 10.86, 88.394]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={96.739}
              >
                <mesh
                  name="Bolt002_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Bolt002_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                name="Bolt003"
                position={[-98.084, -14.489, -45.502]}
                rotation={[-Math.PI / 2, 0, 2.161]}
                scale={96.739}
              >
                <mesh
                  name="Bolt003_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Bolt003_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                name="Bolt004"
                position={[-93.589, -14.489, -55.311]}
                rotation={[-Math.PI / 2, 0, -0.98]}
                scale={96.739}
              >
                <mesh
                  name="Bolt004_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Bolt004_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                name="Camera_Botton"
                position={[0.937, -665.785, 10]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              >
                <group name="Object_41" />
              </group>
              <group
                name="Camera_Top"
                position={[0.937, 665.785, 17]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              >
                <group name="Object_39" />
              </group>
              <group
                name="Camera001"
                position={[0.937, 9.785, 449.075]}
                rotation={[0, 1.571, 0]}
                scale={100}
              >
                <group name="Object_37" />
              </group>
              <group
                name="Circle"
                position={[0.596, 0, -9.076]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Circle_Grey_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle_Grey_0.geometry}
                  material={materials.Grey}
                />
                <mesh
                  name="Fan_3"
                  ref={fan3Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Fan_3.geometry}
                  material={materials.Chrome}
                  position={[1.015, -0.931, 0.051]}
                >
                  <mesh
                    name="Circle002_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002_Black_0001.geometry}
                    material={materials.Black}
                    position={[0.202, 0.286, 0.025]}
                  />
                  <mesh
                    name="Circle003_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle003_Black_0001.geometry}
                    material={materials.Black}
                    position={[-0.2, -0.281, 0.025]}
                    rotation={[0, 0, -Math.PI]}
                  />
                </mesh>
                <mesh
                  name="Fan_4"
                  ref={fan4Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Fan_4.geometry}
                  material={materials.Chrome}
                  position={[-1.015, -0.931, 0.051]}
                >
                  <mesh
                    name="Circle002_Black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002_Black_0.geometry}
                    material={materials.Black}
                    position={[1.015, 0.931, -0.058]}
                  />
                  <mesh
                    name="Circle003_Black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle003_Black_0.geometry}
                    material={materials.Black}
                    position={[-1.018, -0.926, -0.058]}
                    rotation={[0, 0, -Math.PI]}
                  />
                </mesh>
              </group>
              <group
                name="Circle001"
                position={[0.596, 0, -105.264]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Circle001_Grey_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle001_Grey_0.geometry}
                  material={materials.Grey}
                />
                <mesh
                  name="Fan_1"
                  ref={fan1Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Fan_1.geometry}
                  material={materials.Chrome}
                  position={[0.966, -0.552, -0.203]}
                >
                  <mesh
                    name="Circle004_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004_Black_0001.geometry}
                    material={materials.Black}
                    position={[0.122, -0.321, 0.026]}
                    rotation={[0, 0, 2.161]}
                  />
                  <mesh
                    name="Circle005_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle005_Black_0001.geometry}
                    material={materials.Black}
                    position={[-0.126, 0.328, 0.026]}
                    rotation={[0, 0, -0.98]}
                  />
                </mesh>
                <mesh
                  name="Fan_2"
                  ref={fan2Ref}
                  castShadow
                  receiveShadow
                  geometry={nodes.Fan_2.geometry}
                  material={materials.Chrome}
                  position={[-0.966, -0.552, -0.203]}
                >
                  <mesh
                    name="Circle004_Black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004_Black_0.geometry}
                    material={materials.Black}
                    position={[-1.336, 0.331, -0.057]}
                    rotation={[0, 0, 2.161]}
                  />
                  <mesh
                    name="Circle005_Black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle005_Black_0.geometry}
                    material={materials.Black}
                    position={[1.339, -0.323, -0.057]}
                    rotation={[0, 0, -0.98]}
                  />
                </mesh>
              </group>
              <group
                name="Circle002"
                position={[0.596, -0.705, -9.076]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="Circle003"
                position={[-202.692, -0.705, 176.669]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={100}
              />
              <group
                name="Circle004"
                position={[-229.579, -26.054, -83.116]}
                rotation={[-Math.PI / 2, 0, 2.161]}
                scale={100}
              />
              <group
                name="Circle005"
                position={[37.905, -26.054, -17.697]}
                rotation={[-Math.PI / 2, 0, -0.98]}
                scale={100}
              />
              <group
                name="Circle006"
                position={[0, 0, 0.413]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Circle006_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle006_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                name="Circle007"
                position={[0.58, -20.833, 104.012]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              >
                <mesh
                  name="Circle007_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle007_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                name="Cube"
                position={[0.58, -20.833, 104.012]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cube_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Black_0.geometry}
                  material={materials.Black}
                />
                <mesh
                  name="Cube_Glass_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group
                name="Plane"
                position={[0.58, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={100}
              >
                <mesh
                  name="Plane_Grey_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Grey_0.geometry}
                  material={materials.Grey}
                />
              </group>
              <group
                name="Plane001"
                position={[0.58, 0, 1.38]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={100}
              >
                <mesh
                  name="Plane001_Black_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_Black_0.geometry}
                  material={materials.Black}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function DroneCanvas() {
  return (
    <Canvas className="w-full h-[700px]">
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minDistance={1.5}
        maxDistance={1.5}
        enableRotate={true}
      />
      <spotLight intensity={1000} position={[0, 10, 5]} />
      <spotLight intensity={1000} position={[0, -10, 10]} />
      <spotLight intensity={1000} position={[-10, 0, 0]} />
      <Model />
    </Canvas>
  );
}

useGLTF.preload("/minimalist_drone_model.glb");
