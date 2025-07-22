import { FC } from "react";

import logoImage from "/logo-metal.png";

const Logo: FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <a href="/" className="w-14 h-14 rounded-full bg-secondary flex-shrink-0">
          <img src={logoImage} alt="logo" sizes="100%" className="w-full h-full"/>
      </a>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-primary">Vladyslav V.</h1>
        <p className="text-sm text-base-content/70">Metal Plate Configurator</p>
      </div>
    </div>
  )
}

export default Logo