import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { NavLink} from "react-router-dom";
import axios from "axios";
import { Base_Url, GetURL } from "./Apilinks";
import Header from "./Header";

const VehiclesTable = () => {
 
  const [api, setapi] = useState([]);
  const [errmsg, seterrmsg] = useState("");

  const getData = async () => {
    try {
      let get = await axios.get(GetURL);
      let resData = get.data.vehicledetails;
      setapi(resData);
    } catch (error) {
      let err=error.response.data.message
      seterrmsg(error.response.data.message);
      console.log(err)
    }
  };

  useEffect(() => {
    getData();
  }, [api]);

  const Deldata = async (id) => {
    await axios.delete(`${Base_Url}/${id}/delete`);
  };

  return (
    <div>
      <>
        <Header />
      </>
       <div>
        {errmsg==="" ? (
          
<div class="relative overflow-x-auto my-48">

<table class="w-1/12  lg:w-7/12 mx-auto text-sm text-center rtl:text-right dark:text-gray-400">
  <thead class="text-sm text-white uppercase ">
    <tr>
      <th scope="col" class="px-6 py-3 bg-green-400">
        VehicleName
      </th>
      <th scope="col" class="px-6 py-3 bg-green-400">
        VehicleModel
      </th>
      <th scope="col" class="px-6 py-3 bg-green-400">
        VehicleNumplate
      </th>
      <th scope="col" class="px-6 py-3 bg-green-400">
        VehiclType
      </th>
      <th scope="col" class="px-6 py-3 bg-red-600 ">
        DELETE
      </th>
      <th scope="col" class="px-6 py-3 bg-red-600 ">
        UPDATE
      </th>
    </tr>
  </thead>
  <tbody class="bg-green-100 text-sm lg:text-base text-gray-700">
    {api.map((data) => {
      return (
        <tr key={data._id} class=" border-b">
          <td class="lg:px-6 lg:py-4  px-1 py-2">
            {data.vehicleName}
          </td>
          <td class="lg:px-6 lg:py-4  px-1 py-2">
            {data.vehicleModel}
          </td>
          <td class="lg:px-6 lg:py-4  px-1 py-2">
            {data.vehicleNumplate}
          </td>
          <td class="lg:px-6 lg:py-4   px-1 py-2" px-1 py>
            {data.vehicleType}
          </td>
          <td class="px-1 py-2  text-blue-500  bg-red-100  active:bg-gray-300 hover:bg-gray-200 font-semibold ">
            <Button onClick={() => Deldata(data._id)}>DELETE</Button>
          </td>
          <td class="px-1 py-2 active:bg-gray-300  hover:bg-gray-200 text-blue-500  bg-red-100  font-semibold">
            <Button
              LinkComponent={NavLink}
              to={`/${data._id}/update`}
            >
              UPDATE
            </Button>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
</div>

        ) : 
      <div className="w-full font-semibold font-Josefin+Sans text-center text-2xl md:text-3xl lg:text-5xl text-red-600 mt-10">
        <h1 className="mx-auto">{errmsg}...!</h1>
      </div>
        
        }

       
        
      </div>
    </div>
  );
};

export default VehiclesTable;
