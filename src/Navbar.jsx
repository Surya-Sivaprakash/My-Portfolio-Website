import React, { useState } from "react";
import Icon from "./Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-around mt-10 mb-5">
        <div className="flex">
          <div class="w-16 h-16 bg-black rounded-full ">
            <img
              class="w-full h-full object-cover rounded-full"
              src="assets/profile.webp"
              alt="Customer Profile"
            />
          </div>
          <h2 className="text-white text-3xl ml-6 mt-3">Surya S</h2>
        </div>
        {isOpen ? (
          <Icon
            iconName="Cancel"
            width={40}
            height={40}
            onClick={handleClick}
          />
        ) : (
          <Icon
            iconName="Hamburgermenu"
            onClick={handleClick}
            width={40}
            height={40}
          />
        )}
      </div>

      <div
        className={`absolute flex justify-center items-center h-[99vh] w-[99vw] bg-black rounded shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        <div className="flex justify-around">
          {/* <div className="outline-double">
            <img
              src="assets/profile.jpg"
              alt="myProfile"
              className="h-[60vh] w-[30vw]"
            />
          </div> */}
        </div>
        {/* Navigation links */}
        <div className="mx-auto text-center">
          <ul className="py-2 px-4 ">
            <li className="mb-10">
              <a href="/" className="text-white text-4xl hover:text-indigo-600">
                Home
              </a>
            </li>
            <li className="mb-10">
              <a
                href="#About"
                className="text-white text-4xl hover:text-indigo-600"
              >
                About
              </a>
            </li>
            <li className="mb-10">
              <a
                href="#Skills"
                className="text-white text-4xl hover:text-indigo-600"
              >
                My Skills
              </a>
            </li>
            <li className="mb-10">
              <a
                href="#Portfolio"
                className="text-white text-4xl hover:text-indigo-600"
              >
                Portfolio
              </a>
            </li>
            <li className="mb-10">
              <a
                href="#Resume"
                className="text-white text-4xl hover:text-indigo-600"
              >
                Resume
              </a>
            </li>
            <li className="mb-10">
              <a
                href="#Contact"
                className="text-white text-4xl hover:text-indigo-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
