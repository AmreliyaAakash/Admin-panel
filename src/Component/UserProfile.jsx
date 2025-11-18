import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  return (
    <div
      className="fixed backdrop-blur-sm inset-0 flex justify-end z-50"
      onClick={() => setIsClicked(initialState)} // click outside closes panel
    >
      <div
        className="bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // stop close when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            customFunc={() => setIsClicked(initialState)} // close button
          />
        </div>

        {/* User Info */}
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img
            className="rounded-full h-24 w-24"
            src={avatar}
            alt="user-profile"
          />
          <div>
            <p className="font-semibold text-xl dark:text-gray-200">Aakash Amreliya</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">info@Aakash.com</p>
          </div>
        </div>

        {/* Profile Actions */}
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>
              <div>
                <p className="font-semibold dark:text-gray-200">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
