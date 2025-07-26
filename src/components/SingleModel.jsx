import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF, Environment } from "@react-three/drei"; // Import Environment
import * as THREE from "three";

const SingleModel = ({ modelPath, position = [0, 0, 0], scaleFactor = 1 }) => {
  const { scene, animations } = useGLTF(modelPath); // Load the model and animations
  const mixer = useRef(); // Reference for the animation mixer

  // Initialize animation mixer and play the default animation
  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]); // Use the first animation (if available)
      action.play();
    }

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, scene]);

  // Update the animation on each frame
  useEffect(() => {
    if (mixer.current) {
      const animate = () => {
        mixer.current.update(0.01);
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  // Adjust model materials to make them slightly brighter with less intensity
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Make the material slightly emissive
        child.material.emissive = new THREE.Color(0xffffff); // White emissive color
        child.material.emissiveIntensity = 0.02; // Lower emissive intensity
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={position}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    />
  );
};

export default function ModelViewer({ modelPath = "/assets/home.glb" }) {
  const [scaleFactor, setScaleFactor] = useState(1.61); // Scale factor for the model

  return (
    <section className="flex flex-col md:flex-row justify-center items-center ml-4 gap-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl xl:text-6xl md:text-5xl text-white md:leading-tight font-semibold tracking-wide">
          Book a ride with 
        </h1>
        <h2 className="text-3xl xl:text-5xl md:text-5xl text-yellow-300 text-open-data-drivers-earnings md:leading-tight font-semibold tracking-wide">
          Zero Commission
        </h2>
        <p className="text-gray-200 font-light xl:text-2xl md:text-lg text-sm opacity-80 tracking-wide mt-5">
          An open, fast and easy-to-use app. 100% direct payment to drivers.
        </p>
      </div>

      {/* Canvas Section */}
      <div className="w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
        <Canvas camera={{ position: [0, 1.5, 5], fov: 60 }} className="w-full h-full">
          {/* Adjust lighting */}
          <ambientLight intensity={1.0} /> {/* Soft ambient light */}
          <directionalLight position={[5, 5, 5]} intensity={1.5} /> {/* Balanced directional light */}

          {/* Add the Environment preset */}
          <Environment preset="city" />

          <Suspense fallback={<Html><div>Loading...</div></Html>}>
            <SingleModel modelPath={modelPath} position={[0, 0.2, 1.3]} scaleFactor={scaleFactor} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
