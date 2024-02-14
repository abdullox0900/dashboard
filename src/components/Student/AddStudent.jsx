import { Input, Select, Button, message, Spin } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import { storage } from "../../config/firebase";

import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

import axios from "axios";
import { useStudentData } from "../../api/useStudent";

function AddStudent() {
  const [studentImg, setStudentImg] = useState();
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentJob, setStudentJob] = useState("");
  const [studentProject, setStudentProject] = useState(null);
  const [studentDescription, setStudentDescription] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const { TextArea } = Input;

  const [imageUpload, setImageUpload] = useState(null);

  const success = (text) => {
    messageApi.open({
      type: "success",
      content: `${text}`,
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Iltimos malumotlarni toldring",
    });
  };

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {

    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((res) => {
      success("Rasim Firebase yuklandi 😊");
    });

    useEffect(() => {
      listAll(imageListRef).then((res) => {
        console.log(res);
        getDownloadURL(res.items).then((url) => {
          console.log(url);
          // setStudentImg(url);
        });
      });
    }, [])
  };

  
  
  const clearState = () => {
    setImageUpload('')
    setStudentJob('')
    setStudentLastName('')
    setStudentNumber('')
    setStudentDescription('')
    setStudentName('')
    setStudentProject('')
  }

  const postData = () => {
    if (
      studentName == "" &&
      studentLastName == "" &&
      studentNumber == "" &&
      studentImg == ""
    ) {
      warning();
    } else {
      axios
        .post("https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/students", {
          "name": studentName,
          "last_name": studentLastName,
          "img": studentImg,
          "number": studentNumber,
          "job": studentJob,
          "project": studentProject,
          "description": studentProject,
        })
        .then((res) => {
          console.log(res);
          if (res.status >= 200 && res.status < 300) {
            success("Malumot Yuklandi");
            clearState()
          }
        });
    }
  };

  const {data, isLoading} = useStudentData()

  console.log(studentImg);

  return (
    <div className="flex gap-[25px] w-[1000px]">
      <div className="content-tabs w-[50%] h-[800px] mt-[20px] p-[20px] bg-[#fff] rounded-[16px]">
        {contextHolder}
        <h1 className="mb-[20px]">Students Add</h1>
        <form className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <Input
              placeholder="Student First Name"
              size="large"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <Input
              placeholder="Student Last Name"
              size="large"
              value={studentLastName}
              onChange={(e) => setStudentLastName(e.target.value)}
            />
          </div>
         <div className="flex">
         <input
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
          <Button onClick={() => uploadImage()}>Firebase yuklash</Button>
         </div>
          <Input
            placeholder="Student Number"
            size="large"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <Select
            placeholder="Student Job"
            size="large"
            onChange={(e) => setStudentJob(e)}
          >
            <Select.Option value="frontend">Front End</Select.Option>
            <Select.Option value="backend">Back End</Select.Option>
          </Select>
          <Input
            placeholder="Student Project Url"
            size="large"
            value={studentProject}
            onChange={(e) => setStudentProject(e.target.value)}
          />

          <TextArea
            showCount
            maxLength={100}
            value={studentDescription}
            onChange={(e) => setStudentDescription(e.target.value)}
            placeholder="Student description"
            style={{
              height: 120,
              resize: "none",
            }}
          />
          <Button size="large" onClick={() => {
            postData()
          }}>
            Submit
          </Button>
        </form>
      </div>
      <div className="content-tabs relative w-[50%] h-[800px] mt-[20px] p-[20px] bg-[#fff] rounded-[16px]">
        <ul className="flex flex-col gap-[20px]">
          {
          isLoading ? (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
               <Spin />
            </div>
          ) : (
            data.data?.map((item, index) => {
              return (
                <li className="flex items-center gap-[10px] p-[10px] rounded-[16px] shadow-md" key={index}>
                  <img className="w-[40px] h-[40px] object-cover rounded-[50%]" src={item.img} alt="" />
                  <h4 className="text-[18px] font-medium">{item.name}</h4>
                  <p></p>
                </li>
              );
            })
          )
          }
        </ul>
      </div>
    </div>
  );
}
export default AddStudent;
