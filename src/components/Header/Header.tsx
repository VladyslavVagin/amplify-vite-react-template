import { FC, useState } from "react";
import SignOutButton from "./SignOutButton/SignOutButton";
import UserInfo from "./UserInfo/UserInfo";
import Logo from "./Logo/Logo";
import CartIcon from "../Cart/CartIcon/CartIcon";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar bg-base-100 shadow-sm w-full relative">
      {/* Logo - always visible */}
      <div className="flex-1">
        <Logo />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-x-4 items-center">
        <CartIcon />
        <UserInfo />
        <SignOutButton />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="btn btn-ghost btn-square"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg border-t border-base-300 md:hidden z-50 min-h-[120px]">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Cart</span>
              <CartIcon />
            </div>
            <UserInfo />
            <SignOutButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
