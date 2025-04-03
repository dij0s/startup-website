import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Suspense } from "react";

import "./Showcase.css";

const duckModels = [
  { url: "/models/doctor_rubber_ducky.glb", description: "Doctor rubber duck" },
  { url: "/models/pink_rubber_ducky.glb", description: "Pink rubber ducky" },
  {
    url: "/models/rubber_ducky_with_headphones.glb",
    description: "Rubber ducky with headphones",
  },
  {
    url: "/models/rubber_ducky_as_a_pirate.glb",
    description: "Rubber ducky as a pirate",
  },
];

interface DuckModelProps {
  url: string;
  description: string;
}

function DuckModel({ url, description }: DuckModelProps) {
  const { scene } = useGLTF(url);

  return (
    <div className="duck-container">
      <Canvas shadows camera={{ position: [0, 2, 4], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Stage intensity={0.6} environment="city" adjustCamera={false}>
            <primitive
              object={scene}
              position={[0, 0, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.2}
            />
          </Stage>
          <OrbitControls makeDefault enableZoom={false} />
        </Suspense>
      </Canvas>
      <div className="duck-description">{description}</div>
    </div>
  );
}

function Showcase() {
  const scrollToNext = () => {
    const productionElement = document.getElementById("production-wrapper");
    productionElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="showcase-wrapper">
      <div id="showcase-grid-wrapper">
        <div id="showcase-grid">
          {duckModels.map((model) => (
            <DuckModel
              key={model.url}
              url={model.url}
              description={model.description}
            />
          ))}
        </div>
      </div>
      <div id="showcase-content-wrapper">
        <h2>Your ideas, brought to life</h2>
        <div id="showcase-content-cta" onClick={scrollToNext}>
          Discover our end-to-end production process
        </div>
      </div>
    </div>
  );
}

export default Showcase;
