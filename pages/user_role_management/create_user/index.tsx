import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCloudUpload } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import ReactCountryFlag from "react-country-flag";

const Create_User = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const MAX_FILE_SIZE = 5120; // 5MB
    const file = event.target.files[0];
    setSelectedFile(file);

    try {
      // Use FileReader to read the selected image and display it
        const reader = new FileReader();
        reader.onloadend = () => {
          // Update the image preview
          // The reader.result contains the data URL for the image
          // which can be used as the source for an <img> element
          // or in the 'background-image' CSS property
          const imagePreview = document.getElementById('image-preview');
          if (imagePreview) {
            imagePreview.src = reader.result;
          }
        };
        reader.readAsDataURL(file);
    } catch (error) {
      console.log("Error occured when trying to put image in image-preview")
    }
    
  };
  return (
    <div className="mx-4 my-4">
      <div className="text-3xl mt-5">Create User</div>
      <div className="flex flex-row gap-28 my-16 text-gray-600">
        <div className="w-1/3 space-y-4">
          <div className="relative">
            <span className="hidden" id="image_upload_error"></span>
            <label className="cursor-pointer border-dashed border-2 p-4 rounded-2xl w-full h-48 outline-none block text-center flex items-center justify-center">
              {selectedFile ? (
                <img
                    id="image-preview"
                    src=""
                    alt="Selected File Preview"
                    className="rounded-xl w-56 h-44"
                    priority={false}
                />
              ) : (
                <span className="flex flex-row gap-2">
                    <IoMdCloudUpload className="text-white px-1 bg-rose-600 text-3xl rounded " />
                    Upload Hospital Picture
                </span>
              )}
              <input
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div>
            <div>User Name</div>
            <div className="relative flex flex-row">
              <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />
              <input
                className="p-4 pl-10 w-full rounded-xl outline-none"
                style={{ backgroundColor: "#FFF5F7" }}
                type="text"
                placeholder="User Name"
              />
            </div>
          </div>
          <div>
            <div>Email</div>
            <div className="relative flex flex-row">
              <HiOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-2xl" />
              <input
                className="p-4 pl-10 w-full rounded-xl outline-none"
                style={{ backgroundColor: "#FFF5F7" }}
                type="email"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div>
            <div>Phone Number</div>
            <div className="flex flex-row space-x-5">
              <div className="relative flex flex-row">
                <select
                  className="p-4 rounded-2xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                >
                  <option className="flex items-center flex space-x-2">
                    <span className="flex flex-row space-x-2">
                      <ReactCountryFlag countryCode="CH" />
                      <div>+41</div>
                    </span>
                  </option>
                </select>
                
              </div>
              <input
                className="p-4 w-full rounded-xl outline-none"
                style={{ backgroundColor: "#FFF5F7" }}
                type="text"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div>
            <div>User Profile</div>
            <div className="relative flex flex-row">
              <select
                  className="p-4 w-full rounded-2xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                >
                  <option className="flex items-center space-x-2 rounded-xl">
                    <span>HR Admin 1</span>
                  </option>
                  <option className="flex items-center space-x-2 rounded-xl">
                    <span>HR Admin 2</span>
                  </option>
                  <option className="flex items-center space-x-2 rounded-xl">
                    <span>HR Admin 3</span>
                  </option>
                </select>
            </div>
          </div>
          <div>
            <div>Set Status</div>
            <div className="relative flex flex-row">
              <select
                  className="p-4 w-full rounded-2xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                >
                  <option className="flex items-center flex space-x-2">
                    <span>HR Admin</span>
                  </option>
                </select>
            </div>
          </div>
          <div>
            <div>Create Temporary Password</div>
            <div className="relative flex flex-row">
              <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-2xl" />
              <input
                className="p-4 pl-10 w-full rounded-xl outline-none"
                style={{ backgroundColor: "#FFF5F7" }}
                type="email"
                placeholder="Enter your Temporary Password"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 space-x-4">
            <div className="text-lg font-semibold">Permissions</div>
            <div className="space-y-4 mt-5">
                <div className="w-full p-4 rounded-xl" style={{ backgroundColor: "#FFF5F7" }} >
                    <div className="font-semibold">Dashboard</div>
                    <div className="mt-2 space-x-24 flex flex-row">
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">View Only</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Create</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Edit/Delete</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">All</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 rounded-xl" style={{ backgroundColor: "#FFF5F7" }} >
                    <div className="font-semibold">Create Job Post</div>
                    <div className="mt-2 space-x-24 flex flex-row">
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">View Only</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Create</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Edit/Delete</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">All</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 rounded-xl" style={{ backgroundColor: "#FFF5F7" }} >
                    <div className="font-semibold">Manage Job Post</div>
                    <div className="mt-2 space-x-24 flex flex-row">
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">View Only</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Create</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Edit/Delete</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">All</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 rounded-xl" style={{ backgroundColor: "#FFF5F7" }} >
                    <div className="font-semibold">Manage Chat</div>
                    <div className="mt-2 space-x-24 flex flex-row">
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">View Only</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Create</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Edit/Delete</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">All</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 rounded-xl" style={{ backgroundColor: "#FFF5F7" }} >
                    <div className="font-semibold">Manage Applications</div>
                    <div className="mt-2 space-x-24 flex flex-row">
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">View Only</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Create</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Edit/Delete</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">All</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 rounded-xl" style={{ backgroundColor: "#FFF5F7" }} >
                    <div className="font-semibold">Manage Subscription</div>
                    <div className="mt-2 space-x-24 flex flex-row">
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">View Only</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Create</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">Edit/Delete</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                        <div className="space-x-2 flex flex-row ">
                            <span className=" text-gray-900">All</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-black text-white px-48 rounded-full py-5 mt-8 ml-72">
                    Create User
                </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Create_User;
