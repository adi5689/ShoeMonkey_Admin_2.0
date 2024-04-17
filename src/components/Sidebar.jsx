import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  PlusOutlined,
  UnorderedListOutlined,
  MenuOutlined,
  CloseOutlined,
  HomeOutlined 
} from "@ant-design/icons";

const Sidebar = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (!isDesktopOrLaptop) {
      setIsSidebarOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`py-7 flex flex-col gap-x-1 gap-y-5 w-full bg-black sm:gap-x-4 lg:max-w-[250px] ${
        isDesktopOrLaptop ? "flex-shrink-0" : ""
      } lg:flex-col lg:pt-20 lg:max-w-60 lg:h-[full] lg:justify-start lg:pl-6`}
    >
      {!isDesktopOrLaptop && (
        <button
          onClick={toggleSidebar}
          className="p-5 text-white flex cursor-pointer"
        >
          {isSidebarOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      )}


      {/* Home */}
      <div
        className={`p-5 flex hover:text-purple-400 medium-16 ${
          !isDesktopOrLaptop && !isSidebarOpen ? "hidden" : ""
        }`}
      >
        <Link to={"/"} onClick={closeSidebar}>
          <button
            className={`font-anta flex justify-center items-center gap-x-2 ${
              isActive("/")
                ? "border-b-2 border-purple-400 text-purple-400"
                : "border-b-black hover:border-b-white"
            } hover:text-purple-400 text-white`}
          >
            {" "}
            <HomeOutlined />
            Home
          </button>
        </Link>
      </div>
      {/* ADD PRODUCTS */}
      <div
        className={`p-5 flex hover:text-purple-400 medium-16 ${
          !isDesktopOrLaptop && !isSidebarOpen ? "hidden" : ""
        }`}
      >
        <Link to={"/addproduct"} onClick={closeSidebar}>
          <button
            className={`font-anta flex justify-center items-center gap-x-2 ${
              isActive("/addproduct")
                ? "border-b-2 border-purple-400 text-purple-400"
                : "border-b-black hover:border-b-white"
            } hover:text-purple-400 text-white`}
          >
            {" "}
            <PlusOutlined />
            Add Products
          </button>
        </Link>
      </div>

      {/* PRODUCT LIST */}
      <div
        className={`p-5 hover:text-purple-400 flex medium-16 ${
          !isDesktopOrLaptop && !isSidebarOpen ? "hidden" : ""
        }`}
      >
        <Link to={"/productlist"} onClick={closeSidebar}>
          <button
            className={`font-anta flex justify-center items-center gap-x-2 ${
              isActive("/productlist")
                ? "border-b-2 border-purple-400 text-purple-400"
                : "border-b-black hover:border-b-white"
            } hover:text-purple-400 text-white`}
          >
            {" "}
            <UnorderedListOutlined />
            Products List
          </button>
        </Link>
      </div>

      {/* USERS LIST */}
      {/* <div className={`p-5 flex medium-16 ${!isDesktopOrLaptop && !isSidebarOpen ? 'hidden' : ''}`}>
        <Link to={"/productlist"} onClick={closeSidebar}>
          <button className={`font-anta flex justify-center items-center gap-x-2 ${isActive('/') ? 'border-b-2 border-purple-400 text-purple-400' : 'border-b-black hover:border-b-white'} hover:text-purple-400 text-white`}> <UserOutlined />Users</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
