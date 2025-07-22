import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Vladyslav V.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
