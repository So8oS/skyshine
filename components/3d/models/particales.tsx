/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  active: boolean;
  lifetime: number;
  maxLifetime: number;
}

interface ParticlesProps {
  nozzleRef: React.RefObject<THREE.Group>;
  emitterName: string;
  demoSheet: any;
}

const Particles: React.FC<ParticlesProps> = ({
  nozzleRef,
  emitterName,
  demoSheet,
}) => {
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = 1200;
  const particles = useRef<Particle[]>([]);
  const [emitterActive, setEmitterActive] = useState(false);

  // Adjusted physics constants
  const GRAVITY = -0.1;
  const INITIAL_SPEED = 12.5;
  const SPREAD = 0.25;
  const PARTICLE_SIZE = 0.25;
  const emissionRate = 8; // ✅ Keep controlled emissions

  useEffect(() => {
    initializeParticles();
    const emitter = demoSheet.object(emitterName, { active: false });

    // Retrieve and set the initial emitter state
    const initialValues = emitter.getValues
      ? emitter.getValues()
      : { active: false };
    setEmitterActive(initialValues.active);

    const unsubscribe = emitter.onValuesChange((values) => {
      setEmitterActive(values.active);
    });
    return () => unsubscribe();
  }, [emitterName]);

  useFrame(() => {
    updateParticles();
  });

  const initializeParticles = () => {
    const tempParticles: Particle[] = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < particleCount; i++) {
      tempParticles.push({
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        active: false,
        lifetime: 0,
        maxLifetime: 1 + Math.random() * 1.5,
      });

      dummy.position.set(0, 0, 0);
      dummy.scale.setScalar(0); // ✅ Hides inactive particles efficiently
      dummy.updateMatrix();
      instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
    }

    particles.current = tempParticles;
    instancedMeshRef.current!.instanceMatrix.needsUpdate = true;
  };

  const updateParticles = () => {
    const nozzlePosition = new THREE.Vector3();
    nozzleRef.current?.getWorldPosition(nozzlePosition);

    const nozzleQuaternion = new THREE.Quaternion();
    nozzleRef.current?.getWorldQuaternion(nozzleQuaternion);

    const baseDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
      nozzleQuaternion
    );

    const dummy = new THREE.Object3D();
    const deltaTime = 1 / 30; // ✅ Adjusted for frame skipping

    let particlesEmittedThisFrame = 0;

    particles.current.forEach((particle, i) => {
      if (
        emitterActive &&
        !particle.active &&
        particlesEmittedThisFrame < emissionRate
      ) {
        particle.active = true;
        particlesEmittedThisFrame++;
        particle.lifetime = 0;
        particle.position.copy(nozzlePosition);

        // Create cone-shaped emission pattern
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * SPREAD;

        const spreadVector = new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta),
          Math.sin(phi) * Math.sin(theta),
          Math.cos(phi)
        );

        const direction = new THREE.Vector3().copy(baseDirection);
        direction.applyAxisAngle(
          new THREE.Vector3(1, 0, 0),
          spreadVector.x * SPREAD
        );
        direction.applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          spreadVector.y * SPREAD
        );

        particle.velocity.copy(direction).multiplyScalar(INITIAL_SPEED);
      }

      if (particle.active) {
        particle.lifetime += deltaTime;
        if (particle.lifetime > particle.maxLifetime) {
          particle.active = false;
          dummy.position.copy(particle.position);
          dummy.scale.setScalar(0); // ✅ Hides inactive particles efficiently
          dummy.updateMatrix();
          instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
          return;
        }

        particle.velocity.y += GRAVITY * deltaTime;
        particle.position.addScaledVector(particle.velocity, deltaTime);

        dummy.position.copy(particle.position);
        dummy.scale.setScalar(PARTICLE_SIZE);
        dummy.updateMatrix();
        instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
      }
    });

    if (instancedMeshRef.current) {
      instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  };

  return (
    <instancedMesh ref={instancedMeshRef} args={[null, null, particleCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshPhysicalMaterial
        color="#065fc9"
        transparent
        opacity={0.7}
        depthWrite={false} // ✅ Best GPU Optimization
        metalness={0.2}
        roughness={0.1}
        envMapIntensity={1.5}
        emissive="#2060ff"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
};

export default Particles;
