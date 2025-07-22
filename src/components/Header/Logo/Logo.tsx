import { FC } from "react"
import logoImage from "/logo-metal.png"

const Logo: FC = () => {
  return (
    <a href="/" className="w-14 h-14 rounded-full bg-secondary">
        <img src={logoImage} alt="logo" sizes="100%" className="w-full h-full"/>
    </a>
  )
}

export default Logo