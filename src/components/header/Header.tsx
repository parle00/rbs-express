"use client";
import { useState } from "react";
import headerStyles from "./header.module.css";
import useUpdateFile from "@/hooks/useUpdateFile";
import { RiMenu3Fill } from "react-icons/ri";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

const Header = () => {
  useUpdateFile();

  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <header className="w-full flex flex-col justify-center items-center border-b-[1px] border-gray-800">
      <div
        className={`container-with-padding ${headerStyles.headerContainer} `}
      >
        <div>
          <div className="block md:hidden">
            <button
              onClick={() => {
                alert("menu opened");
              }}
            >
              <RiMenu3Fill className="text-[24px]" />
            </button>
          </div>
          <div className="hidden md:block">{"<---"}</div>
        </div>
        <div>RbsExpress</div>
        <div>
          <button
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            {isDark ? (
              <BsToggleOn className="text-[32px]" />
            ) : (
              <BsToggleOff className="text-[32px] text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
