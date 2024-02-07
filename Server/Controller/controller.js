
import {Vehicles  } from "../Modal/modal.js";
// import bcrypt from "bcrypt"

const getvehicledetails = async (req, res) => {
  let vehicledetails;
  try {
    vehicledetails = await Vehicles.find();
    if (vehicledetails.length === 0) {
      return res.status(404).json({
        success: false,
        message: "vehicles data are not found",
      });
    }
    return res.status(200).json({
      success:true,
      vehicledetails,
    });
  } catch (error) {
    console.log(error);
  }
};

const getvehiclesid = async (req, res) => {
  let {id} = req.params;
  let vehicleid;

  try {
    vehicleid = await Vehicles.findById(id);
    if (!vehicleid) {
      return res.status(404).json({
        success: false,
        message: "vehicle not found",
      });
    }
    return res.status(200).json({
      success:true,
      vehicleid});
  } catch (error) {
    console.log(error);
  }
};

// const getvehiclesid = async(req, res) => {
//   let { id } = req.params;
//   let getid;
//   try {
//     getid = await Vehicles.findById(id);
//   } catch (error) {
//     console.log(error);
//   }
//   if (!getid) {
//     return res.status(400).json({
//       success: false,
//       message: "No data are found",
//     });
//   }
//   return res.status(200).json(

//     getid
//   );
// };

// const postVehilesData = async (req, res) => {
//   let { name, modal,vehicleNumplate, type } = req.body;
//   let encryptVehicle=bcrypt.hashSync(vehicleNumplate,10);
//   let vehicle;
//   try {
//     vehicle = new Vehicles({ 
//       vehicleName: name,
//       vehicleModel: modal,
//       vehicleNumplate:encryptVehicle,
//       // numplate:encryptVehicle,
//       vehicleType: type,
      
//     });
//     await vehicle.save();
//     if (!vehicle) {
//       return res.status(404).json({
//         success: false,
//         error: "no data are found",
//       });
//     }
//     return res.status(200).json({ 
//       success:true,
//       message: "data was post" });
//   } catch (error) {
//     console.log(error);
//   }
// };
// const postVehiles=async(req,res)=>{
//   let{name,age,id}=req.body;
//   let post;
//   try {
//     post=new Employee({
//       emname:name,
//       emage:age,
//       emid:id
//     })
//     await post.save();
//     return res.status(200).json({
//       message:"succussfully data was posted",
//       post

//     })
//   } catch (error) {
//     console.log(error)
//   }

// }


const postVehilesData = async (req, res) => {

  let { name, modal,numplate, type } = req.body;
  let vehicle;
  try {
    vehicle = new Vehicles({ 
      vehicleName: name,
      vehicleModel: modal,
      vehicleNumplate:numplate,
      vehicleType: type
      
    });
    await vehicle.save();
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "no data are found"
      });
    }
    return res.status(200).json({ 
      success:true,
      message: "data was post" });
  } catch (error) {
    console.log(error);
  }
};


const delvehicles = async (req, res) => {
  let { delvehiclesid } = req.params;
  let deldata;
  try {
    deldata = await Vehicles.findByIdAndDelete(delvehiclesid);
    if (!deldata) {
      return res.status(404).json({
        success: false,
        message: "no data are found",
      });
    }
    return res.status(200).json({ 
      success:true,
      message: "successfully data was deleted.." });
  } catch (error) {
    console.log(error);
  }
};

// const delvehicles = async (req, res) => {
//   let { delvehiclesid } = req.params;

//   try {
//     await Vehicles.findByIdAndDelete(delvehiclesid);

//     return res.status(200).json({ message: "successfully data was deleted.." });
//   } catch (error) {
//     console.log(error);
//   }
// };
const updateVehicles = async (req, res) => {
  let { id } = req.params;
  let { vehicleName,vehicleModel,vehicleNumplate,vehicleType} = req.body;
  let update;
  try {
    update = await Vehicles.findByIdAndUpdate(id, {
      vehicleName,
      vehicleModel,
      vehicleNumplate,
      vehicleType
    });

    if (!update) {
      return res.status(400).json({
        success: false,
        message: "vehicles data are found"
      });
    }
    return res.status(200).json({
      success: true,
      message: "data was updated"
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  updateVehicles,
  getvehiclesid,
   postVehilesData,
  // postVehiles,
  getvehicledetails,
  delvehicles,
};

