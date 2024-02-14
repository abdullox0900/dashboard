import { useState } from "react";

import "./App.css";

import axios from "axios";

import { Input, Button, message } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

function FormOne() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [heroImg, setHeroImg] = useState("");
  const [imgOne, setImgOne] = useState("");
  const [imgTwo, setImgTwo] = useState("");
  const [imgThree, setImgThree] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
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

  const clearStateValue = () => {
    setName("");
    setPrice("");
    setHeroImg("");
    setImgOne("");
    setImgTwo("");
    setImgThree("");
    setDescription("");
    setDiscount("");
  };

  const postData = function () {
    if (name == "" && price == "" && heroImg == "" && discount == "") {
      warning();
    } else {
      setIsLoading(true);

      axios
        .post("https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products", {
          product_name: name,
          product_price: price,
          product_img: heroImg,
          product_urls: [imgOne, imgTwo, imgThree],
          product_discount: discount,
          product_description: description,
        })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          if (res.status == 200 || res.status == 201) {
            success();
            clearStateValue();
          }
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(() => {
          error();
        });
    }
  };

  return (
    <>
      <div className="container w-[400px] mx-auto px-4">
        {contextHolder}
        <h1 className="text-center my-[30px]">POST DATA</h1>
        <Input
          className="mb-[20px]"
          placeholder="Product Name"
          size="large"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          className="mb-[20px]"
          placeholder="Product Price"
          size="large"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Input
          className="mb-[20px]"
          placeholder="Product Image Hero"
          size="large"
          value={heroImg}
          onChange={(e) => setHeroImg(e.target.value)}
        />

        <Input
          className="mb-[20px]"
          placeholder="Product Image 1"
          size="large"
          value={imgOne}
          onChange={(e) => setImgOne(e.target.value)}
        />

        <Input
          className="mb-[20px]"
          placeholder="Product Image 2"
          size="large"
          value={imgTwo}
          onChange={(e) => setImgTwo(e.target.value)}
        />

        <Input
          className="mb-[20px]"
          placeholder="Product Image 3"
          size="large"
          value={imgThree}
          onChange={(e) => setImgThree(e.target.value)}
        />

        <Input
          className="mb-[20px]"
          placeholder="Product Discount"
          size="large"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />

        <Input.TextArea
          className="mb-[20px]"
          placeholder="Product Description"
          size="large"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button className="w-full" size={"large"} onClick={postData}>
          {isLoading == true ? "Loading..." : "Submit"}
        </Button>
      </div>
    </>
  );
}
export default FormOne;
