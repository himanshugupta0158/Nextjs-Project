import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import ReactCountryFlag from "react-country-flag";
import { IoMdCloudUpload } from "react-icons/io";
import { RiDeleteBin7Line } from "react-icons/ri";
import { countries } from "country-data-list";

const Profile = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.all.find((country) => country.alpha2 === "CH")
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("123456789");
  const [Username, setUsername] = useState("Shivam Kumar");
  const [Email, setEmail] = useState("shivam.kumar@gmail.com");
  const [Address, setAddress] = useState(
    "XYZ street near shopping mall, abc house"
  );
  const [Zipcode, setZipcode] = useState("123456");
  const [NameOfHospital, setNameOfHospital] = useState("XYZ Hospital");
  const [Description, setDescription] = useState("XYZ Hospital is good");
  const [CurrentPassword, setCurrentPassword] = useState("123456");
  const [NewPassword, setNewPassword] = useState("123456");

  console.log("Phone Number : ", phoneNumber);
  console.log("COuntries : ", countries);

  const handleFileChange = (event) => {
    const MAX_FILE_SIZE = 5120; // 5MB
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const countries_list = countries.all
    .filter(
      (country) =>
        country && country.emoji && country.countryCallingCodes && country.name
    )
    .map((country) => country);

  console.log("List : ", countries_list);

  const handleCountryChange = (countryCode: string) => {
    const selected = countries.all.find(
      (country) => country.alpha2 === countryCode
    );
    setSelectedCountry(selected);
  };

  return (
    <div className="flex flex-col mx-4">
      <div className="text-2xl">Account Settings</div>
      <div className="flex space-x-5 py-5 text-gray-600">
        <div className="w-1/2 flex flex-col">
          <div className="m-1 my-1">
            <div className="relative flex flex-row">
              <label>
                <IoMdCloudUpload className="text-white bg-rose-600 text-3xl rounded ml-28 p-0.5 mt-4 absolute" />
                <input type="file" className="hidden" />
              </label>

              <label>
                <RiDeleteBin7Line className="text-white bg-rose-600 text-3xl rounded ml-40 p-0.5 mt-4 absolute" />
                <input type="button" className="hidden" />
              </label>

              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                className="border border-gray-400 rounded-xl object-cover h-52 w-52"
                alt=""
              />
            </div>
          </div>
          <div className="space-y-2 my-2 mx-1">
            <div>
              <div>User Name</div>
              <div className="relative flex flex-row">
                <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="text"
                  placeholder={Username}
                />
              </div>
            </div>
            <div>
              <div>Email</div>
              <div className="relative flex flex-row">
                <HiOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-2xl" />
                <input
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="email"
                  placeholder={Email}
                />
              </div>
            </div>
            <div>
              <div>Phone Number</div>
              <div className="flex flex-row space-x-5">
                <div className="relative flex flex-row">
                  <select
                    value={selectedCountry?.alpha2}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="p-4 w-28 rounded-2xl outline-none"
                    style={{ backgroundColor: "#FFF5F7" }}
                  >
                    {countries.all
                      .filter(
                        (country) =>
                          country &&
                          country.emoji &&
                          country.countryCallingCodes &&
                          country.name
                      )
                      .map((country) => (
                        <option
                          key={country.alpha2}
                          value={country.alpha2}
                          className="flex items-center"
                        >
                        {country.emoji} {country.countryCallingCodes[0]}
                        </option>
                      ))}
                  </select>
                </div>
                <input
                  className="p-4 w-7/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>Address</div>
              <div className="relative flex flex-row">
                <IoLocationOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-2xl" />
                <input
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="text"
                  placeholder={Address}
                />
              </div>
            </div>
            <div>
              <div>Zip Code</div>
              <div className="relative flex flex-row">
                <input
                  className="p-4 pl-5 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="text"
                  placeholder={Zipcode}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div>
                <div>Country</div>
                <div className="relative flex flex-row">
                  <input
                    className="p-4 w-full rounded-xl outline-none"
                    style={{ backgroundColor: "#FFF5F7" }}
                    type="text"
                    placeholder={selectedCountry.name}
                  />
                </div>
              </div>
              <div>
                <div>State</div>
                <div className="relative flex flex-row">
                  <input
                    className="p-4 w-full rounded-xl outline-none"
                    style={{ backgroundColor: "#FFF5F7" }}
                    type="text"
                    placeholder={selectedCountry.state}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div>
            <div>
              <div>Hospital Name</div>
              <div className="relative flex flex-row">
                <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="text"
                  placeholder={NameOfHospital}
                />
              </div>
            </div>
            <div className="my-4">
              <div>Add Description</div>
              <div className="relative flex flex-row">
                <textarea
                  cols="15"
                  rows="7"
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  placeholder={Description}
                />
              </div>
            </div>
            <div className="relative my-5">
              <label className="cursor-pointer border-dashed border-2 p-4 rounded-xl w-9/12 outline-none block text-center">
                {selectedFile ? (
                  <span>{selectedFile.name}</span>
                ) : (
                  "Upload Hospital Documents"
                )}
                <input
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                />
              </label>
              <span className="block text-gray-500 w-9/12 mt-2">
                Upload files in PDF format up to 5 MB. Just upload it once and
                you can use it in your next application.
              </span>
            </div>
            <div>
              <div>Current Password</div>
              <div className="relative flex flex-row">
                <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="my-4">
              <div>New Password</div>
              <div className="relative flex flex-row">
                <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  className="p-4 pl-10 w-9/12 rounded-xl outline-none"
                  style={{ backgroundColor: "#FFF5F7" }}
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="p-5 px-36 w-9/12 bg-black text-white rounded-full my-4"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
