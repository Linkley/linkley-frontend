import React from "react";
import logo from "../../assets/images/logo-horizontal-black.png";

const Header = () => {
  return (
    <div className="absolute top-0 w-full">
      <div className="bg-[#D3E4E1]">
        <div className="flex flex-row justify-left items-left ">
          <div className="flex flex-row justify-left items-left">
            <img src={logo} alt="logo" className="w-1/6" />
          </div>
          <div id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a href="#Home" class="block py-2 pl-3 pr-4 text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" class="block py-2 pl-3 pr-4 text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#Home" class="block py-2 pl-3 pr-4 text-gray-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#Home" class="block py-2 pl-3 pr-4 text-gray-700">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#Home" class="block py-2 pl-3 pr-4 text-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
