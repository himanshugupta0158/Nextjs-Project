import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import ImageLoad from "./ImageLoader";
import Link from "next/link";
// import icons from react icons
import {
  // MdOutlineMoreHoriz,
  // MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { PiSuitcaseSimpleDuotone, PiWechatLogoDuotone } from "react-icons/pi";
import { PiUserCircleGearFill } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { TfiWallet } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import { RiUserSearchLine } from "react-icons/ri";
import { LiaUserPlusSolid } from "react-icons/lia";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";


function SideNavbar({expanded, setExpanded}) {
  const toggleSidebar = () => {
    setExpanded((curr) => !curr);
  };
  const [dashboardclicked, setdashboardClicked] = useState(false);
  const [userManegementclicked, setUserManegementclicked] = useState(false);

  const handleDashboardClick = () => {
    setdashboardClicked(true)
    setUserManegementclicked(false)
  }
  const handleUserManagementClick = () => {
    setdashboardClicked(false)
    if (userManegementclicked) {
      setUserManegementclicked(false)
    } else {      
      setUserManegementclicked(true)
    }
  }
  return (
    <div>
      <Disclosure as="nav">
        {/* <div className="flex flex-col"> */}

        {expanded ? (
          <div
            className={`p-6 w-9/10 h-screen bg-white z-20 fixed top-0 ${
              expanded ? "left-96" : "-left-60"
            } lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border border-gray-200`}
          >
            <div className="flex flex-col justify-start items-center">
              <h1 className="text-base text-center flex flex-row cursor-pointer font-bold text-rose-600 border-b border-gray-100 pb-4 w-full">
                <Link href="/"><ImageLoad src="/logo_image.png" height={200} width={200}/></Link>
                    <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-black mb-4"
                    >
                        <BsChevronDoubleLeft /> 
                    </button>
                </h1>
              <div className="my-4 border-b border-gray-100 pb-4 w-full">
                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <RxDashboard className={`text-2xl ${dashboardclicked ? "text-rose-600" : "text-gray-600"} group-hover:text-white`} />
                  <h3 className={`text-base ${dashboardclicked ? "text-rose-600" : "text-gray-800"} group-hover:text-white font-semibold`}>
                    <Link href="/" onClick={handleDashboardClick} className="text-sm">Dashboard</Link>
                  </h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <PiUserCircleGearFill className={`text-4xl ${userManegementclicked ? "text-rose-600" : "text-gray-600"} group-hover:text-white`} />
                  <h3 className={`text-base ${userManegementclicked ? "text-rose-600" : "text-gray-800"} group-hover:text-white font-semibold flex flex-row`}>
                    <p onClick={handleUserManagementClick} className="text-sm">User Role Management</p>
                    {
                      userManegementclicked ? 
                      <FaChevronDown  className="mt-3 text-xl"/> :
                        <FaChevronRight  className="mt-3 text-sm"/>
                    }
                  </h3>
                </div>

                <div
                  className={`${userManegementclicked ? "" : "hidden"} flex mb-2 ml-3 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
                >
                  {/* need icons */}
                  <LiaUserPlusSolid className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link href="/user_role_management/create_user" className="text-sm">Create User</Link>
                  </h3>
                </div>

                <div
                  className={`${userManegementclicked ? "" : "hidden"} flex mb-2 ml-3 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
                >
                  {/* need icons */}
                  <RiUserSearchLine className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link href="/user_role_management/view_user" className="text-sm">View User</Link>
                  </h3>
                </div>

                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <PiSuitcaseSimpleDuotone className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link className="text-sm" href="/">
                    Create Job Post
                    </Link>
                  </h3>
                </div>

                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <PiSuitcaseSimpleDuotone className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link className="text-sm" href="/">
                    Manage Job Post
                    </Link>
                  </h3>
                </div>

                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <GrGroup className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link className="text-sm" href="/">
                    Manage Applicants
                    </Link>
                  </h3>
                </div>

                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <PiWechatLogoDuotone className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link className="text-sm" href="/">
                    Chat
                    </Link>
                  </h3>
                </div>

                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <TfiWallet className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    <Link className="text-sm" href="/">
                    Subscription
                    </Link>
                  </h3>
                </div>
              </div>

              {/* Settings & More */}
              {/* <div className="my-4 border-b border-gray-100 pb-4 w-full">
                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Settings
                  </h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-2 px-5 hover:bg-rose-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    More
                  </h3>
                </div>
              </div> */}

              {/* Logout */}
              <div className="absolute bottom-0 left-5 w-48">
                <div className="flex mb-2 justify-start items-center p-2 gap-4 px-5 border border-gray-200 hover:bg-rose-600 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  {/* need icons */}
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Logout
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center fixed h-screen left-0 top-0 bg-white border border-gray-200">
            {/* show sidebar button */}
            <div className="flex flex-col justify-center items-center p-2">
              <button
                onMouseEnter={toggleSidebar}
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-black mb-4"
              >
                <BsChevronDoubleRight />
              </button>
            </div>
          </div>
        )}

        {/* </div> */}
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
