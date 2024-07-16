import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const links = [
    {
      title: "Home",
      Link: "/",
    },
    {
      title: "About Us",
      Link: "/about-us",
    },
    {
      title: "Skills",
      Link: "/skills",
    },
    {
      title: "Project",
      Link: "/all-project",
    },
    {
      title: "Contact",
      Link: "/contact",
    },
  ];
  const [MobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="bg-zinc-800 z-50 relative text-white px-8 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 me-4"
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
          <h1 className="text-xs font -semibold">
            Vanita <div>Software Developer</div>{" "}
          </h1>
        </Link>

        <div className="nav-p-library block md:flex items-center gap-4">
          <div className="md:flex gap-4 hidden ">
            {links.map((items, id) => {
              return (
                <Link
                  to={items.Link}
                  className="hover:text-blue-500 transition-all duration-300 cursor-pointer "
                  key={id}
                >
                  {items.title}
                </Link>
              );
            })}
          </div>

          <button
            className=" block text-white text-2xl hover:text-zinc-400 lg:hidden"
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <IoMenuSharp />
          </button>
        </div>
      </nav>
      <div
        className={`${MobileNav}  bg-zinc-800 h-screen  absolute  left-0 top-0 w-full z-40 flex flex-col justify-center items-center`}
      >
        {links.map((items, id) => {
          return (
            <Link
              to={items.Link}
              className={`${MobileNav}  text-white text-4xl mb-8  font-semibold hover:text-blue-500 transition-all duration-300 cursor-pointer `}
              key={id}
              onClick={() =>
                MobileNav === "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              {items.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
