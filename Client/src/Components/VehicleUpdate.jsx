import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Base_Url } from "./Apilinks";

const VehicleUpdate = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  let [vehicledetails, setvehicledetails] = useState({
    vehicleName: "",
    vehicleModel: "",
    vehicleNumplate: "",
    vehicleType: "",
  });

  useEffect(() => {
    let getbyid = async () => {
      let responce = await axios.get(`${Base_Url}/${id}`);
      let datum = responce.data.vehicleid;
      setvehicledetails(
        datum
        //   {
        //   vehicleName:dataum.vehicleName,
        //   vehicleModel:dataum.vehicleModel,
        //   vehicleNumplate:dataum.vehicleNumplate,
        //   vehicleType:dataum.vehicleType
        // }
      );
    };
    getbyid();
  }, [id]);

  let inputHandler = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setvehicledetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  let submitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`${Base_Url}/${id}/update`, vehicledetails);
    navigate("/table");
  };
  return (
    <>
      <div className="container h-[460px] w-1/2 lg:w-full mx-auto flex justify-center items-center">
        <div className="border bg-red-100  border-red-500 rounded-3xl  shadow-gray-500 shadow-2xl  mx-auto mt-32 ">
          <Form
            onSubmit={submitHandler}
            className="px-8 py-4 lg:px-10 sm:pl-14 lg:py-10 w-full font-serif text-gray-800"
          >
            <Form.Field className="mb-1 lg:my-3 sm:mt-3 py-3">
              <label className=" text-lg lg:text-xl"> VehicleName </label>
              <input
                className="mt-1 lg:mt-0 px-3  py-1-border-spacing-2   border-2  border-red-400 ml-2 sm:ml-10 lg:ml-12"
                type="text"
                name="vehicleName"
                value={vehicledetails.vehicleName}
                onChange={inputHandler}
              />
            </Form.Field>
            <Form.Field calssNamclassName="mb-1 lg:my-3 py-2 ">
              <label className=" text-lg lg:text-xl">VehicleModel </label>
              <input
                className=" mt-1 lg:mt-0 px-3 py-border-spacing-2-1 border-2  border-red-400 ml-2 sm:ml-10 lg:ml-11"
                type="text"
                name="vehicleModel"
                value={vehicledetails.vehicleModel}
                onChange={inputHandler}
              />
            </Form.Field>
            <Form.Field className="mb-1 lg:my-3 py-2 ">
              <label className=" text-lg lg:text-xl">VehicleNumPlate </label>
              <input
                className=" mt-1 lg:mt-0 px-3 py-border-spacing-2-1 border-2  border-red-400 ml-2 sm:ml-10 lg:ml-[12px]"
                type="text"
                name="vehicleNumplate"
                value={vehicledetails.vehicleNumplate}
                onChange={inputHandler}
              />
            </Form.Field>
            <Form.Field className="mb-1 lg:my-3 lg:py-2 ">
              <label className=" text-lg lg:text-xl">VehicleType </label>
              <input
                className=" mt-1 lg:mt-0 px-3 py-border-spacing-2-1 border-2  border-red-400 ml-2  sm:ml-10 lg:ml-14"
                type="text"
                name="vehicleType"
                value={vehicledetails.vehicleType}
                onChange={inputHandler}
              />
            </Form.Field>
            <div className="flex mb-2 lg:mb-0 w-full mt-4 lg:mt-8 ">
              <Button
                type="submit"
                className=" active:bg-red-500 flex text-lg bg-red-400 px-7 py-2   text-white font-semibold rounded-sm mx-auto font-sans"
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

export default VehicleUpdate;
