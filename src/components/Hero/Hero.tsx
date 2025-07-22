import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 py-2">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">⚙️</span> Metal Plate Configurator
          </h1>
          <p className="text-xl mb-8">
            Design your custom metal plate with precision. Choose dimensions,
            materials, and finishes to create the perfect plate for your
            project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
