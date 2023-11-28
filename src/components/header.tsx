import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  type ActiveType = {
    isActive: boolean;
  };

  const [toggle, setToggle] = useState(false);

  const showHide = () => {
    setToggle((toggle) => !toggle);
  };

  const navLink = ({ isActive }: ActiveType) => {
    return {
      color: isActive ? "#34C200" : "",
      fontSize: isActive ? "16px" : "",
      borderBottom: isActive ? "solid" : "none",
      paddingBottom: isActive ? "3px" : "",
      outline: isActive ? "none" : "none",
    };
  };

  return (
    <>
      <header className="shadow-md sticky z-30 top-0 bg-white px-5 md:px-10">
        <nav className="flex items-center py-4">
          <div className="flex flex-row pl-0 md:w-3/12 md:mx-auto">
            <img
              className="w-1/4 md:w-1/4 md:block"
              src="images/constLogo.png"
              alt="logo"
            />
            <div className="flex justify-center items-center">
              <span className="text-gray-500 italic text-center font-bold text-md md:text-md p-1">
                College of Nursing Sciences, Tambuwal
              </span>
            </div>
          </div>
          <ul className="hidden md:flex flex-1 justify-end items-center gap-3 lg:gap-6">
            <li className="cursor-pointer">
              <NavLink to="/" style={navLink}>
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="registry" style={navLink}>
                Registry
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="academic" style={navLink}>
                Academic
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="examination" style={navLink}>
                Examination
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="elibrary" style={navLink}>
                e-Library
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="about" style={navLink}>
                About Us
              </NavLink>
            </li>
            <button
              type="button"
              className="text-white bg-green-500 p-2.5 rounded hover:bg-atasp-mid-red uppercase text-xs"
              disabled
            >
              <a href="portal">Portal</a>
            </button>
          </ul>

          <div
            className={`${
              toggle ? `hidden` : ``
            } flex flex-1 md:hidden justify-end transition-all duration-500`}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl text-atasp-dark-green cursor-pointer"
              onClick={showHide}
            />
          </div>
          <div
            className={`${
              toggle ? `` : `hidden`
            } flex flex-1 md:hidden justify-end transition-all duraiton-500`}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl text-atasp-maroon cursor-pointer"
              onClick={showHide}
            />
          </div>
        </nav>

        {/* Nav on Small Screen */}
        <div
          className={`${
            toggle
              ? "max-h-[500px] p-3 overflow-hidden"
              : "max-h-0 overflow-hidden"
          } flex flex-col sm:max-h-0 items-end box-border space-y-3 transition-all ease-in`}
        >
          <NavLink
            to="/"
            style={navLink}
            className="cursor-pointer hover:text-gray-500"
          >
            ATASP-1
          </NavLink>
          <NavLink
            to="infra"
            style={navLink}
            className="cursor-pointer hover:text-gray-500"
          >
            Infrastructure
          </NavLink>
          <NavLink
            to="outreach"
            style={navLink}
            className="cursor-pointer hover:text-gray-500"
          >
            Outreach
          </NavLink>
          <NavLink
            to="progressOfWork"
            style={navLink}
            className="cursor-pointer hover:text-gray-500"
          >
            Work Progress
          </NavLink>
          <NavLink to="gallary" style={navLink} className="cursor-pointer">
            Gallary
          </NavLink>
          <NavLink
            to="aboutUs"
            style={navLink}
            className="cursor-pointer hover:text-gray-500"
          >
            About Us
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
