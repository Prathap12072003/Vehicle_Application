import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-green-300 p-1 ">
          <div class=" dark:text-red-700 sm:flex  lg:mx-10 mx-0  ">
            <div class="sm:mt-4 font-Josefin+Sans font-bold mt-4 lg:text-3xl   text-2xl  text-center sm:text-left sm:ml-4 my-2">
              VehicleINFO.com
            </div>
            <div class="lg:ml-auto lg:text-lg flex lg:flex-none p-3   sm:ml-auto mx-auto sm:mx-6    ">
              <a class="mx-auto lg:mx-0 text-white   text-base bg-red-500 active:bg-red-200 px-4 lg:px-6 py-2 lg:py-3   font-semibold rounded-sm  lg:rounded-md" href="/">
                Add Vehicle
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
