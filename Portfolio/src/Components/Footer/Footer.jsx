import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-zinc-700  text-white px-8 py-2 ">
      <div className="justify-center items-center flex flex-col m-6">
        <div className="flex gap-4  cursor-pointer m-3">
          <Link to="https://www.linkedin.com/in/vanita-barhman-6521201b2">
            <FaLinkedin size={28} />
          </Link>
          <Link to="https://github.com/Vanita-123">
            <FaGithub size={28} />
          </Link>
        </div>
        <h1 className="text-xl font-semibold text-center">
          &copy; 2024, All rights reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;
