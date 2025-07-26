import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const LoadingPage = () => {
  const modelRef = useRef(null);
  const { scene, animations } = useGLTF('/assets/loader.glb'); // Loading the GLTF model
  const mixerRef = useRef(null); // Reference for AnimationMixer
  const [modelPosition, setModelPosition] = useState(-5); // Start position on X-axis

  // Setup the animation mixer once animations are loaded
  useEffect(() => {
    if (scene && animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play(); // Play animations
      });
    }
  }, [scene, animations]);

  // Update animation and model movement on each frame
  useEffect(() => {
    const animate = () => {
      if (mixerRef.current) {
        mixerRef.current.update(0.01); // Update animation on each frame
      }

      // Update the position of the model on the X-axis
      setModelPosition((prev) => {
        if (prev < 5) { // Move the model from -5 to 5 on X-axis
          return prev + 0.06; // Adjust the speed of movement
        } else {
          return prev; // Stop at 5
        }
      });
    };

    const animationInterval = setInterval(animate, 16); // Approx 60 FPS

    return () => clearInterval(animationInterval); // Cleanup animation interval
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 75 }}
        gl={{ antialias: true }}
        style={{ backgroundColor: '#EDEADE' }}
        // Blakish white background
      >
        {/* Apply a city environment preset */}
        <Environment preset="city" />

        {/* Center the model, increase its scale, and attach animations */}
        <mesh ref={modelRef} position={[modelPosition, 0, 0]} scale={[2, 2, 2]}>
          {scene && <primitive object={scene} />} {/* Render the loaded scene */}
        </mesh>

        {/* Add OrbitControls for user interaction */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default LoadingPage;
