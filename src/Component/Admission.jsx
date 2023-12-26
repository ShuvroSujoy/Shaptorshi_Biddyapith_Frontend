import React, { useContext, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { userContent } from "../LayOut/MainLayOut";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { gql, useMutation } from "@apollo/client";

const CREATE_ADMISSION = gql`
  mutation CreateAdmission($data: AdmissionCreateInput!) {
    createAdmission(data: $data) {
      id
      content
    }
  }
`;

const Admission = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedShifts, setSelectedShifts] = useState([]);
  const [users] = useContext(userContent);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    StudentName: "",
    SchoolName: "",
    ContactNumber: "",
    MothersName: "",
    MothersOccupation: "",
    FathersName: "",
    FathersOccupation: "",
    HomeAddress: "",
  });

  const [createAdmission] = useMutation(CREATE_ADMISSION, {
    onCompleted: (data) => {
      Swal.fire({
        icon: "success",
        title: "We have received your request",
        text: "One of our representatives will contact you shortly.",
        footer: `Your admission id is <br/><strong>${data.createAdmission.id}</strong>`,
      });
      setFormData({
        StudentName: "",
        SchoolName: "",
        ContactNumber: "",
        MothersName: "",
        MothersOccupation: "",
        FathersName: "",
        FathersOccupation: "",
        HomeAddress: "",
      });

      // Clear selectedClasses and selectedShifts
      setSelectedClasses([]);
      setSelectedShifts([]);
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    },
  });

  const handleClassCheckbox = (classNumber) => {
    if (selectedClasses.includes(classNumber)) {
      setSelectedClasses(selectedClasses.filter((cls) => cls !== classNumber));
    } else {
      setSelectedClasses([...selectedClasses, classNumber]);
    }
  };

  const handleShiftCheckbox = (shift) => {
    if (selectedShifts.includes(shift)) {
      setSelectedShifts(selectedShifts.filter((s) => s !== shift));
    } else {
      setSelectedShifts([...selectedShifts, shift]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!users?.uid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not loged In!",
        footer: "Please Login First",
      });
    }

    createAdmission({
      variables: {
        data: {
          content: {
            ...formData,
            selectedClasses,
            selectedShifts,
          },
        },
      },
    });
  };

  return (
    <div className="container">
      {/* Top Part */}
      <div className=" mt-10 mb-10">
        <div className="flex flex-col  items-center gap-y-2">
          <img
            className="h-[150px] w-[200px] "
            src="public/Image/SptLogo2.png"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-red-600 font-bold">
            সপ্তর্ষী{" "}
            <span className="text-base md:text-xl font-SptFont text-red-600">
              Eductaion Project
            </span>
          </h1>
          <div className="flex flex-col gap-2 md:flex md:flex-row">
            <div className="flex items-center gap-2 text-base text-red-800 group">
              <IoHomeSharp size={20} className="group-hover:text-red-600" />
              <p className="group-hover:text-red-600">
                31,Lower Jashore Road,Khulna Sadar, Khulna.
              </p>
            </div>
            <div className="flex items-center gap-2 text-base text-red-800 group">
              <IoHomeSharp size={20} className="group-hover:text-red-600" />
              <p className="group-hover:text-red-600">
                03,Fire Brigade Road,Khulna Sadar, Khulna.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex md:flex-row">
            <div className="flex items-center gap-x-1 group ">
              <FiPhoneCall
                size={20}
                className="text-base text-red-800 group-hover:text-red-600"
              />
              <h3 className="text-base text-red-800 group-hover:text-red-600">
                +01912-667044,
              </h3>
            </div>
            <div className="flex items-center gap-x-1 group">
              <FiPhoneCall
                size={20}
                className="text-base text-red-800 group-hover:text-red-600"
              />
              <h3 className="text-base text-red-800 group-hover:text-red-600">
                +01628-190818,
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-red-600 h-[1px] w-full mt-5"></div>
        <div className="flex justify-center mt-5 mb-5">
          <h1 className="md:text-2xl text-xl font-SptFont font-semibold text-red-600">
            Students Information
          </h1>
        </div>
        <div className="flex items-center justify-center mt-10 mb-10">
          <div className="h-[3px] w-16 bg-red-800"></div>
          <div className="h-[5px] w-16 bg-red-800"></div>
          <div className="h-[3px] w-16 bg-red-800"></div>
        </div>

        {/* form Part */}
        <from action="" className="space-y-5">
          <div
            className="md:flex md:flex-row flex flex-col justify-evenly
                 items-center"
          >
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2 items-center">
                <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                  Student Name:
                </h2>
                <input
                  type="text"
                  name="StudentName"
                  placeholder="StudentName"
                  className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                  School Name:
                </h2>
                <input
                  type="text"
                  name="SchoolName"
                  placeholder="SchoolName"
                  className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                Contact Number:
              </h2>
              <input
                type="number"
                name="ContactNumber"
                placeholder="ContactNumber"
                className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h2 className="md:text-2xl text-xl font-SptFont font-semibold text-red-600">
                Select Classes and Shifts
              </h2>
            </div>
            <form className="">
              <div className="md:flex md:flex-row md:justify-evenly flex flex-col items-center gap-3 text-red-800 md:text-xl text-[16px] font-SptFont ">
                <h3 className="md:text-xl text-[20px] font-semibold">
                  Select Classes:
                </h3>
                {[3, 4, 5, 6, 7, 8, 9].map((classNumber) => (
                  <div key={classNumber}>
                    <input
                      type="checkbox"
                      id={`class-${classNumber}`}
                      checked={selectedClasses.includes(classNumber)}
                      onChange={() => handleClassCheckbox(classNumber)}
                      required
                    />
                    <label
                      htmlFor={`class-${classNumber}`}
                    >{`Class ${classNumber}`}</label>
                  </div>
                ))}
                <p className="md:text-xl text-[20px] font-semibold">
                  Selected Classes: {selectedClasses.join(", ")}
                </p>
              </div>
            </form>
            <form>
              <div className="mmd:flex md:flex-row md:justify-evenly flex flex-col items-center gap-3 text-red-800 md:text-xl text-[16px] font-SptFont">
                <h3 className="md:text-xl text-[20px] font-semibold">
                  Select Shifts:
                </h3>
                {["Morning", "Middle", "Day"].map((shift) => (
                  <div key={shift}>
                    <input
                      type="checkbox"
                      id={`shift-${shift}`}
                      checked={selectedShifts.includes(shift)}
                      onChange={() => handleShiftCheckbox(shift)}
                      required
                    />
                    <label htmlFor={`shift-${shift}`}>{shift} Shift</label>
                  </div>
                ))}
                <p className="md:text-xl text-[20px] font-semibold">
                  Selected Shifts: {selectedShifts.join(", ")}
                </p>
              </div>
            </form>
          </div>
          {/* Guardian Information */}
          <div className="flex justify-center mt-10 mb-5">
            <h1 className="md:text-2xl text-xl font-SptFont font-semibold text-red-600">
              Guardian Information
            </h1>
          </div>
          <div className="flex items-center justify-center mt-10 mb-10">
            <div className="h-[3px] w-16 bg-red-800"></div>
            <div className="h-[5px] w-16 bg-red-800"></div>
            <div className="h-[3px] w-16 bg-red-800"></div>
          </div>
          <div className="flex flex-col mt-10 gap-y-3">
            <div className="md:flex md:flex-row md:justify-evenly flex flex-col gap-y-3">
              <div className="flex gap-x-2 items-center">
                <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                  Mothers Name:
                </h2>
                <input
                  type="text"
                  name="MothersName"
                  placeholder="MothersName"
                  className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                  Occupation:
                </h2>
                <input
                  type="text"
                  name="MothersOccupation"
                  placeholder="MothersOccupation"
                  className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="md:flex md:flex-row md:justify-evenly flex flex-col gap-y-3">
              <div className="flex gap-x-2 items-center">
                <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                  Fathers Name:
                </h2>
                <input
                  type="text"
                  name="FathersName"
                  placeholder="FathersName"
                  className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                  Occupation:
                </h2>
                <input
                  type="text"
                  name="FathersOccupation"
                  placeholder="FathersOccupation"
                  className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex gap-x-2 items-center justify-evenly">
              <h2 className="md:text-xl text-[12px] text-red-800 font-SptFont font-semibold">
                Home Address:
              </h2>
              <input
                type="text"
                name="HomeAddress"
                placeholder="Address"
                className="border-b-2 hover:border-red-800 px-3 py-2 w-3/5"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {/* Submition */}
          <div className="flex justify-center mt-20">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-10 py-3 text-xl hover:text-2xl text-white font-SptFont font-bold bg-red-800 hover:bg-red-600 rounded-2xl"
            >
              Submit
            </button>
          </div>
        </from>

        {/* APi Form */}
        {/* <form action="https://getform.io/f/006d9ef1-92b0-4eea-afd7-96b922c11e63" method="POST">
                    <input className='border border-slate-900 w-20 h-5' type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="text" name="message" />
                    <input type="hidden" name="_gotcha"/>

                    <input type="checkbox" name="subscribe" value="yes" checked />
                    <input type="hidden" name="subscribe" value="no" />

                    <input type="radio" name="gender" value="male" checked />
                    <input type="radio" name="gender" value="female" />
                    <input type="radio" name="gender" value="other" />

                    <select name="work-experience">
                        <option value="one-year">0-1 years</option>
                        <option value="one-five-years">1-5 years</option>
                    </select>
                    <button type="submit">Send</button>
                </form> */}
      </div>
    </div>
  );
};

export default Admission;
