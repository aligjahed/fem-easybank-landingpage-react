import { useState } from "react";
import Button from "../components/Button";
import Menu from "../components/Menu";
import logo from "../assets/images/logo.svg";
import hamMenu from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-[25px] py-[20px] md:px-[165px] md:py-[18px] bg-neutral-white">
      <img className="sm:w-[140px]" src={logo} alt="logo" />
      <nav className="hidden md:block">
        <ul className="flex space-x-[33px] font-light ">
          <li className="group hover:cursor-pointer">
            <p>Home</p>
            <div className="navIndicator"></div>
          </li>
          <li className="group hover:cursor-pointer">
            <p>About</p>
            <div className="navIndicator"></div>
          </li>
          <li className="group hover:cursor-pointer">
            <p>Contact</p>
            <div className="navIndicator"></div>
          </li>
          <li className="group hover:cursor-pointer">
            <p>Blog</p>
            <div className="navIndicator"></div>
          </li>
          <li className="group hover:cursor-pointer">
            <p>Careers</p>
            <div className="navIndicator"></div>
          </li>
        </ul>
      </nav>
      <Button text="Request Invite" />
      <img
        className={menuOpen ? "md:hidden animate-fadeIn" : "hidden"}
        src={hamMenu}
        alt="menu"
        onClick={() => setmenuOpen(!menuOpen)}
      />
      <img
        className={!menuOpen ? "md:hidden  animate-fadeIn" : "hidden"}
        src={closeIcon}
        alt="close"
        onClick={() => setmenuOpen(!menuOpen)}
      />
      <Menu close={menuOpen} />
    </header>
  );
};
export default Header;
