import React from 'react'
import logo from '../../assets/images/logo-horizontal-black.png'
const Footer = () => {
    

return (
  <div className="absolute bottom-0 w-full">
    <div className="bg-[#D3E4E1]">
      <div className="flex flex-row justify-center items-center p-4 ">
        <div className="flex flex-row justify-center items-center">
          <img src={logo} alt="logo" className="w-1/6" />
        </div>
        {/* <div className="flex flex-col text-normal font-extralight justify-between ">
                    <a href="#" className="m-2">About</a>
                    <a href="#" className="m-2">Help</a>
                    <a href="#" className="m-2">Language</a>
                </div> */}
      </div>
      <div className="text-center text-xs p-4">© 2023 All Rights Reserved</div>
    </div>
  </div>
);
}

export default Footer