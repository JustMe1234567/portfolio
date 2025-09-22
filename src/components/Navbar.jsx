import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/klowiLogo.webp";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <a
          href="https://github.com/JustMe1234567/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/john-chloe-gomandoy-629905323/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
