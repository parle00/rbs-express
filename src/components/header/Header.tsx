"use client";
import headerStyles from "./header.module.css";
import useUpdateFile from "@/hooks/useUpdateFile";

const Header = () => {
  useUpdateFile();

  return (
    <header className="w-full flex flex-col justify-center items-center border-b-[1px] border-gray-800">
      <div
        className={`container-with-padding ${headerStyles.headerContainer} `}
      >
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
      </div>
    </header>
  );
};

export default Header;
