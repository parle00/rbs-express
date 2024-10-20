"use client";
import { Filter } from "@/models/express";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

import drawerStyle from "./Drawer.module.css";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  filterData: Filter[];
}

const Drawer = ({ open, onClose, filterData }: DrawerProps) => {
  const pathname = usePathname();
  return (
    <>
      <div
        onClick={onClose}
        className={`w-[100vw] h-[100vh] bg-[#000000cc] left-0 top-0 z-[1300]  ${
          open ? "fixed" : "hidden"
        }`}
      />
      <div
        className={`flex flex-col w-[250px] h-[100vh] bg-[#171717] py-[15px] fixed top-0 z-[1301] transition-all duration-[150ms] ${
          open ? "left-0" : "left-[-150%]"
        }`}
      >
        <div className="pl-[25px] pr-[10px] flex flex-row justify-between items-center">
          <div>RbsExpress</div>
          <button onClick={onClose}>
            <IoClose className="text-[36px]" />
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-800 my-[20px]" />
        <div className="pl-[15px]">
          <ul className={`${drawerStyle.drawerContent} gap-[15px]`}>
            {filterData?.map((filterItem: Filter, index: number) => {
              return (
                <li
                  key={index}
                  className={`${
                    pathname !== "/"
                      ? pathname?.includes(
                          filterItem.timeline_category as string
                        )
                        ? drawerStyle.active
                        : ""
                      : ""
                  }`}
                >
                  <Link
                    onClick={onClose}
                    href={`${filterItem.timeline_category}`}
                    title={filterItem.timeline_category_name}
                  >
                    <span>
                      <Image
                        priority={true}
                        className="rounded-[50%]"
                        src={filterItem.icon_url as string}
                        width={24}
                        height={24}
                        alt={`${filterItem.timeline_category_name}-Icon`}
                      />
                    </span>

                    <span style={{ color: filterItem.color_dark }}>
                      {filterItem.timeline_category_name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full h-[1px] bg-gray-800 my-[30px]" />
      </div>
    </>
  );
};

export default Drawer;
