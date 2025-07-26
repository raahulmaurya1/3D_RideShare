import React, { Suspense, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Bounds } from "@react-three/drei";
import ErrorBoundary from "./ErrorBoundary";
import CarModel from "./CarModel";

const models = [
  { id: "model-1", modelUrl: "/assets/bike.glb", title: "Bike" },
  { id: "model-2", modelUrl: "/assets/car.glb", title: "Car" },
  { id: "model-3", modelUrl: "/assets/auto.glb", title: "Auto" },
];

export default function ThreeDModelGrid() {
  const [hoveredModel, setHoveredModel] = useState(null);
  const [zoomedModel, setZoomedModel] = useState(null);
  const controlsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setZoomedModel(null); // Reset zoom when the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <section className="flex justify-center gap-10 p-6 flex-wrap">
        {models.map(({ id, modelUrl, title }) => (
          <div key={id} className="flex flex-col items-center">
            {/* 3D Model Container */}
            <div
              className="relative bg-gray-800 rounded-xl shadow-lg w-full sm:w-80 md:w-95 h-60 sm:h-80 lg:h-80"
              onMouseEnter={() => setHoveredModel(id)}
              onMouseLeave={() => setHoveredModel(null)}
            >
              {/* Model container - Escapes only when hovered */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-full ${hoveredModel === id ? "z-50" : ""}`}
                animate={hoveredModel === id ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Canvas
                  camera={{ position: [0, 1.5, 4], fov: 50 }}
                  className="w-full h-full"
                >
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                  <Environment preset="city" />

                  <Suspense fallback={<Html><div>Loading...</div></Html>}>
                    <Bounds fit={false} clip={true} observe>
                      <motion.group
                        animate={{ scale: zoomedModel === id ? 1.1 : 1 }} // Reset to actual size
                        transition={{ duration: 0.3 }}
                      >
                        <CarModel url={modelUrl} id={id} />
                      </motion.group>
                    </Bounds>
                  </Suspense>

                  <OrbitControls
                    ref={(ref) => (controlsRef[id] = ref)}
                    enableZoom={true}
                    enableRotate={true}
                    enablePan={true}
                    minDistance={2.5} // Prevents zooming in too much
                    maxDistance={5} // Adjust for a good viewing range
                    onChange={() => {
                      const distance = controlsRef[id]?.object.position.distanceTo(
                        controlsRef[id]?.target
                      );
                      setZoomedModel(distance < 2 ? id : null);
                    }}
                  />
                </Canvas>
              </motion.div>
            </div>

            {/* Title Below */}
            <h3 className="text-center mt-3 text-white text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </section>
    </ErrorBoundary>
  );
}
