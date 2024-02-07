import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { PostURL } from "./Apilinks";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "@fontsource/roboto";


const VehiclesForms = () => {
  const nav = useNavigate();

  const [name, setname] = useState("");
  const [modal, setmodal] = useState("");
  const [numplate, setnumplate] = useState("");
  const [type, settype] = useState("");

  const postData = async () => {
    await axios.post(PostURL, {
      name,
      modal,
      numplate,
      type,
    });

    nav("/table");
  };

  return (
    <>
    <>
    <HomePage />
    </>
      <div className="container h-[460px] mb-32 mt-[-20px]  w-1/2 lg:w-full mx-auto flex justify-center items-center">
        <div className="border-2  bg-green-100 border-green-300   rounded-3xl  shadow-gray-500 shadow-2xl  mx-auto mt-32 ">
          <Form className="px-8 py-4 sm:pl-14 lg:px-10 lg:py-10 w-full font-serif text-gray-800">
            <Form.Field className="mb-1 sm:mt-3 lg:my-3 py-3">
              <label className=" text-lg lg:text-xl"> VehicleName </label>
              <input
                className=" px-3  py-1   border-2 border-green-500 ml-2 sm:ml-10 lg:ml-12"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Field>
            <Form.Field calssNamclassName="mb-1 lg:my-3  ">
              <label className=" text-lg lg:text-xl">VehicleModal </label>
              <input
                className="px-3 py-1 border-2 border-green-500 ml-2 sm:ml-10 lg:ml-11"
                type="text"
                value={modal}
                onChange={(e) => setmodal(e.target.value)}
              />
            </Form.Field>
            <Form.Field className="mb-1 lg:my-3 py-2 ">
              <label className=" text-lg lg:text-xl">VehicleNumPlate </label>
              <input
                className="px-3 py-1 border-2 border-green-500 ml-2 sm:ml-10 lg:ml-[12px]"
                type="text"
                value={numplate}
                onChange={(e) => setnumplate(e.target.value)}
              />
            </Form.Field>
            <Form.Field className="mb-1 lg:my-3 lg:py-2 py-1   ">
              <label className=" text-lg md:text-xl">VehicleType </label>
              
              <input
                className="px-3 py-1  border-2 border-green-500 ml-2 sm:ml-10 lg:ml-14    "
                type="text"
                value={type}
                onChange={(e) => settype(e.target.value)}
              />
            </Form.Field>
            <div className="flex mb-2 lg:mb-0 w-full mt-6 lg:mt-8 ">
              <Button
                onClick={postData}
                className=" active:bg-green-500 flex text-lg bg-green-400 px-7 py-2  text-white font-semibold rounded-sm mx-auto font-sans"
              >
                Submit{" "}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default VehiclesForms;
