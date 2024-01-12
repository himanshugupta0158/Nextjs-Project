import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaSearch } from 'react-icons/fa';
import { FaUser, FaBars, FaImage, FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { IoImageOutline } from 'react-icons/io5';
import { PiNotebookDuotone } from "react-icons/pi";


const capitalizeWords = (str) => {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const TopBar = () => {
  const router = useRouter();
  const { pathname, query } = router;

  let paths = pathname.split("/").map((path) => path.replace(/\[|\]/g, ""));
  paths = paths.map((path, index) => (query[path] ? query[path] : path));
  console.log("Path Name : ", paths);
  console.log("queries : ", query);

  return (
    <Disclosure as="div">
      <div className="bg-white text-black border border-gray-200 p-4 flex justify-between items-center">
        {/* Router path showing below*/}
        <div className="text-gray">
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <span
                style={{
                  color: index === paths.length - 1 ? 'black' : 'gray',
                  marginRight: '8px',
                }}
              >
                {capitalizeWords(path)}
              </span>
              {index > 0 && (
                <>
                  {index === paths.length - 1 ? null : <span style={{ color: 'gray', marginRight: '8px' }}>/</span>}
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Navigation links on the right */}
        <div className="flex space-x-8 mx-4">
         <div className="flex items-center bg-gray-100 p-1 rounded-md ml-24 mx-5">
          <FaSearch className="text-gray-500" />

          <div className="flex-1 ml-2">
            <input
              type="search"
              name="search"
              id="search"
              className="bg-gray-100 border-none focus:outline-none w-44"
              placeholder="Search"
              />
              <span className="text-gray-500 ml-2">⌘/</span>
          </div>
        </div>
          {/* <Link className="px-1" href="/"><FaHome className="text-2xl text-gray-500 cursor-pointer" /></Link> */}
          <Link href="/ag_grid"><FaImage className="text-3xl text-gray-500 cursor-pointer" /></Link>
          <Link href="/content"> <PiNotebookDuotone className="text-3xl text-gray-500 cursor-pointer" /></Link>
          <Link href="/my_profile"><MdAccountCircle className="text-3xl text-gray-500 cursor-pointer" /></Link>
        </div>
      </div>
    </Disclosure>
  );
};
