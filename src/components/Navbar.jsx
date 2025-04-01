import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaDev, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa"; // Import icons



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Rayan Ahsan
          </p>
        </Link>

        {/* Desktop Navbar */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Social Media Icons */}
          <div className="flex gap-4 items-center">
            <a
              href="https://devpost.com/rayan-ahsan28?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[24px] hover:text-[#915eff]"
            >
              <FaDev />
            </a>
            <a
              href="https://github.com/RayanAhsan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[24px] hover:text-[#915eff]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rayan-ahsan-60023928b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[24px] hover:text-[#915eff]"
            >
              <FaLinkedin />
            </a>
            {/* Resume Button */}
            <a
              href="/path-to-your-resume.pdf" // Replace with the correct path to your resume
              download="Rayan_Ahsan_Resume.pdf"
              className="text-white text-[24px] hover:text-[#915eff]"
            >
              <FaFilePdf />
            </a>
          </div>
        </ul>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-4 items-center">
                <a
                  href="https://devpost.com/rayan-ahsan28?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[24px] hover:text-[#915eff]"
                >
                  <FaDev />
                </a>
                <a
                  href="https://github.com/RayanAhsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[24px] hover:text-[#915eff]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/rayan-ahsan-60023928b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[24px] hover:text-[#915eff]"
                >
                  <FaLinkedin />
                </a>
                {/* Resume Button */}
                <a
                  href="/resume/RayanAhsan_Resume.pdf" // Replace with the correct path to your resume
                  download="Rayan_Ahsan_Resume.pdf"
                  className="text-white text-[24px] hover:text-[#915eff]"
                >
                  <FaFilePdf />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
