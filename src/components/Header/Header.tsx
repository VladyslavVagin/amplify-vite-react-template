import { FC } from "react";
import SignOutButton from "./SignOutButton/SignOutButton";
import UserInfo from "./UserInfo/UserInfo";
import Logo from "./Logo/Logo";

const Header: FC = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm w-full justify-between">
      <Logo />
      <div className="flex gap-x-6 items-center">
        <UserInfo />
        <SignOutButton />
      </div>
    </header>
  );
};

export default Header;
