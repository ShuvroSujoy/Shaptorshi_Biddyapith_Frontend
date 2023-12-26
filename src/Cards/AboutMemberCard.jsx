import React from "react";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const AboutMemberCard = ({
  Image,
  Name,
  Qualification,
  ContactNumber,
  MailId,
  Designation,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <div className="rounded-md max-w-xs flex flex-col border border-gray-200">
        <div className="px-2 flex justify-center bg-[url('public/Image/Bgcard1.jpg')] bg-no-repeat bg-cover">
          <img className="w-full h-[300px] px-2 " src={Image} alt="" />
        </div>
        <div className="h-[150px] flex flex-col gap-y-1 mt-4 mb-4 mx-4">
          <div className="text-base text-red-800 font-SptFont font-extrabold list-none cursor-pointer">
            {Name}
          </div>
          <h4 className="text-base text-red-800 font-SptFont ">
            {Qualification}
          </h4>
          <div className="mt-2">
            <div className="flex">
              <IoCall size={20} className="text-red-800 mr-1" />
              <p className="text-sm text-red-800 font-SptFont ">
                {ContactNumber}
              </p>
            </div>
            <div className="flex">
              <MdMail size={20} className="text-red-800 mr-1" />
              <p className="text-sm text-red-800 font-SptFont ">{MailId}</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-red-600 font-SptFont">{Designation}</h2>
    </div>
  );
};

export default AboutMemberCard;
