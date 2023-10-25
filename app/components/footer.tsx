import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-[#232D3F] text-[#fff]">
      <div className="container mx-auto flex justify-between items-center py-10">
        <div>
          <h3 className="text-2xl font-semibold">SWIFT University</h3>
          <p className="mt-2">Your path to success.</p>
        </div>
        <div className="flex gap-5 text-[#fff]">
          <Link href="">
            <FaXTwitter className="text-2xl hover:text-[#005B41] transition duration-300" />
          </Link>
          <Link href="">
            <FiLinkedin className="text-2xl hover:text-[#005B41] transition duration-300" />
          </Link>
          <Link href="">
            <FiInstagram className="text-2xl hover:text-[#005B41] transition duration-300" />
          </Link>
          <Link href="">
            <FiFacebook className="text-2xl hover:text-[#005B41] transition duration-300" />
          </Link>
          <Link href="">
            <FiYoutube className="text-2xl hover:text-[#005B41] transition duration-300" />
          </Link>
        </div>
      </div>
      <p className="text-center text-sm font-light">&copy; Copyright 2023. SWIFT University</p>
    </footer>
  );
};


