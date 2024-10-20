"use client";
import { useState } from "react";
import headerStyles from "./header.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import Drawer from "../drawer/Drawer";
import { FaArrowAltCircleUp } from "react-icons/fa";
import useScroll from "@/hooks/useScroll";
import { Filter } from "@/models/express";

const HeaderClientContent = ({ filterData }: { filterData: Filter[] }) => {
  const scrollY = useScroll();
  const [isDark, setIsDark] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full flex flex-col justify-center items-center border-b-[1px] border-gray-800 bg-[#171717] sticky top-0 md:relative">
        <div
          className={`container-with-padding ${headerStyles.headerContainer} `}
        >
          <div>
            <Drawer
              filterData={filterData}
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            />
            <div className="block md:hidden">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <RiMenu3Fill className="text-[24px]" />
              </button>
            </div>
            <div className="hidden md:block">RbsExpress</div>
          </div>
          <div className="block md:hidden">RbsExpress</div>
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
      <button
        className={`fixed bottom-[10px] transition-all duration-[150ms] ${
          !open && scrollY > 300 ? "right-[10px]" : "right-[-150%]"
        }`}
        onClick={() => {
          window.scrollTo({
            top: 0,
          });
        }}
      >
        <FaArrowAltCircleUp className="text-[48px] text-[#171717] bg-white rounded-[50%]" />
      </button>
    </>
  );
};

export default HeaderClientContent;
