import { IoIosMenu, IoIosClose } from "react-icons/io";

import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "Statistics", link: "/" },
    { name: "Applied Jobs", link: "/applied_jobs" },
    { name: "Blog", link: "/blog" },
  ];
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" w-full relative top-0 left-0 shadow-md z-[100]">
      <div className=" container mx-auto md:flex items-center justify-between py-4">
        <div className="font-bold flex text-2xl cursor-pointer items-center text-gray-800">
          <h4 className="text-3xl text-dark">Career Hub</h4>
        </div>
        <div className="md:hidden absolute right-8 top-6 cursor-pointer text-3xl">
          <button onClick={toggleOpen}>
            {open ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 pl-7 md:pl-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto gap-5 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-490px opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((Link) => {
            return (
              <li className="text-[1rem] md:my-0 my-7" key={Link.name}>
                <NavLink to={Link.link}>{Link.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="">
          <Button text="Start Applying" />
        </div>
      </div>
    </div>
  );
};

export default Header;
