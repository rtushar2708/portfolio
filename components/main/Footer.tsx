import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="m-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-2">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="m-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-2">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div>
          <div className="m-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-2">About Us</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]">
              <span className="text-[15px] ml-[6px]">
                rtushar2708@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Tushar Rajput 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
