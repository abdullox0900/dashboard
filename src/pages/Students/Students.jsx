import { useState } from "react";

import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

import AddStudent from "../../components/Student/AddStudent";
import StudentList from "../../components/Student/StudentList";
import useHeaderTitle from "../../hooks/useHeaderTitle";

function Students() {

  const {setText} = useHeaderTitle()

  setText('Student')

  const onChange = (key) => {
  };

  const items = [
    {
      key: "1",
      label: "Students List",
      children: <StudentList />,
    },
    {
      key: "2",
      label: "Student",
      children: <StudentsInfo />,
    },
    {
      key: "3",
      label: "Top Students",
      children: <StudentsTop />,
    },
    {
        key: "4",
        label: "Add Student",
        children: <AddStudent />,
      },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

      {/* <ul className="flex flex-wrap gap-[25px]">
        <li className="flex gap-[3px] items-center justify-between w-[260px] h-[50px] p-[17px] rounded-[16px] bg-[#fff] shadow-md">
          <div className="text-[#67748e]">Student List</div>
          <span className="font-semibold text-[#252f40]">L-10</span>
        </li>
        <li className="flex gap-[3px] items-center justify-between w-[260px] h-[50px] p-[17px] rounded-[16px] bg-[#fff] shadow-md">
          <div className="text-[#67748e]">Student Materials</div>
          <span className="font-semibold text-[#252f40]">L-10</span>
        </li>
        <li className="flex gap-[3px] items-center justify-between w-[260px] h-[50px] p-[17px] rounded-[16px] bg-[#fff] shadow-md">
          <div className="text-[#67748e]">Top Students</div>
          <span className="font-semibold text-[#252f40]">L-10</span>
        </li>
        <li className="flex gap-[3px] items-center justify-between w-[260px] h-[50px] p-[17px] rounded-[16px] bg-[#fff] shadow-md">
          <div className="text-[#67748e]">Leader Students</div>
          <span className="font-semibold text-[#252f40]">L-10</span>
        </li>
      </ul> */}
    </>
  );
}

function StudentsTop() {
  return (
    <div className="content-tabs w-full h-[800px] mt-[20px] p-[20px] bg-[#fff] rounded-[16px]">
      <h1>Students Info</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        assumenda facere nisi possimus totam dolor iste qui deserunt excepturi
        nostrum.
      </p>
    </div>
  );
}

function StudentsInfo() {
  return (
    <div className="content-tabs w-full h-[800px] mt-[20px] p-[20px] bg-[#fff] rounded-[16px]">
      <h1>Top Students</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        assumenda facere nisi possimus totam dolor iste qui deserunt excepturi
        nostrum.
      </p>
    </div>
  );
}

export default Students;
