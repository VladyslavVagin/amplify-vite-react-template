import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 py-4 md:py-2">
      <div className="hero-content text-center">
        <div className="max-w-2xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-primary">⚙️</span> Metal Plate Configurator
          </h1>
          <p className="text-base md:text-xl mb-6 md:mb-8 leading-relaxed">
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
