import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
export function Footer() {
  return (
    <div className="p-5 bg-red-500 flex justify-between">
      <div>
        <h1 className="font-medium text-white">© 2023 Sooru, Inc. All rights reserved.</h1>
      </div>
      <div className="flex">
        <div className="pl-2">
          <BiLogoInstagramAlt className="text-white hover:text-black" fontSize={20}/>
        </div>
        <div className="pl-2">
          <FaFacebookF className="text-white hover:text-black" fontSize={20}/>
        </div>
        <div className="pl-2">
          <FaLinkedinIn className="text-white hover:text-black" fontSize={20}/>
        </div>
        <div className="pl-2">
          <FaYoutube className="text-white hover:text-black" fontSize={20}/>
        </div>
      </div>
    </div>
  );
}
