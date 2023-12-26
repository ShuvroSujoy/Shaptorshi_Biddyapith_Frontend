import React from "react";
import AboutMemberCard from "../Cards/AboutMemberCard";
import { gql, useQuery } from "@apollo/client";
import { Loader2 } from "lucide-react";

const TEACHERS = gql`
  query Teachers {
    teachers {
      avatar {
        url
        extension
      }
      id
      name
      qualification
      phone
      email
      designation
    }
  }
`;

const AboutUs = () => {
  const { data, loading } = useQuery(TEACHERS);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20">
        <Loader2 className="text-red-800 animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center gap-5 mb-10">
        <h1 className="md:text-4xl text-xl text-red-600 text-center font-bold">
          সপ্তর্ষী পরিবার
        </h1>
        <div className="flex items-center">
          <div className="h-[2px] w-16 bg-red-800"></div>
          <div className="h-[5px] w-16 bg-red-800"></div>
          <div className="h-[2px] w-16 bg-red-800"></div>
        </div>
      </div>
      {/* Advisors Panel */}
      <div className="container bg-[url('')] mb-10">
        {/* <div className="">
          <AboutMemberCard
            Image="public/Image/BadhsaSir.png"
            Name="Md Badsha Khan"
            Qualification="Msc In Mathemtics,Jhangirnagor University"
            ContactNumber="01912-897799"
            MailId="badshakhan22@gmail.com"
            Designation="Prime Advisor"
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-10">
          <AboutMemberCard
            Image="public/Image/SotProfile.png"
            Name="Adnan"
            Qualification="dvdv"
            ContactNumber="161612"
            MailId="mailid@gmail.com"
            Designation="Advisor 1"
          />
          <AboutMemberCard
            Image="public/Image/SotProfile.png"
            Name="cvdssbb"
            Qualification="dvdv"
            ContactNumber="161612"
            MailId="mailid@gmail.com"
            Designation="Advisor 2"
          />
        </div> */}
        {/* MD PaneL */}
        {/* <div className="mt-10">
          <AboutMemberCard
            Image="public/Image/Samia.png"
            Name="Mss.Samia Sultana"
            Qualification="MA In English,Dhaka University"
            ContactNumber="01912-667044"
            MailId="samiasultana661@gmail.com"
            Designation="MD"
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-10">
            <AboutMemberCard
              Image="public/Image/Shimanto.png"
              Name="Shimanto Khan"
              Qualification="dvdv"
              ContactNumber="161612"
              MailId="mailid@gmail.com"
              Designation="DD"
            />
            <AboutMemberCard
              Image="public/Image/Sreya.png"
              Name="Sreya"
              Qualification="dvdv"
              ContactNumber="161612"
              MailId="mailid@gmail.com"
              Designation="ADD"
            />
          </div>
        </div> */}
        {/* CEO Panel */}
        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10">
          <AboutMemberCard
            Image="public/Image/SotProfile.png"
            Name="cvvvx"
            Qualification="dvdv"
            ContactNumber="161612"
            MailId="mailid@gmail.com"
            Designation="CEO 2"
          />
          <AboutMemberCard
            Image="public/Image/Sujoy.png"
            Name="Shuvro Sujoy"
            Qualification="Computer Engineer"
            ContactNumber="01319-775409"
            MailId="shuvrosujoy422@gmail.com"
            Designation="CEO 1"
          />
          <AboutMemberCard
            Image="public/Image/SotProfile.png"
            Name="sdsbbs"
            Qualification="dvdv"
            ContactNumber="161612"
            MailId="mailid@gmail.com"
            Designation="CEO 3"
          />
        </div> */}
        {/* Teacher Panel */}
        {/* <div>
                <h3 className='flex justify-center text-2xl text-red-600 font-SptFont text-center'>Teachers And Their Details</h3>
            </div> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10 mb-10">
          {data?.teachers?.map((teacher) => (
            <AboutMemberCard
              key={teacher.id}
              Image={teacher.avatar?.url}
              Name={teacher.name}
              Qualification={teacher.qualification}
              ContactNumber={teacher.phone}
              MailId={teacher.email}
              Designation={teacher.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
