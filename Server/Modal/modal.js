import mongoose from "mongoose";
const vehicleDetails = new mongoose.Schema({
  vehicleName: {
    type:String,
    required: true
  },

  vehicleModel: {
    type:String,
    required:true
  },

  vehicleNumplate: {
    type:String,
    required: true
  },

  vehicleType:{
    type:String,
    required: true
  }
});



// const Schema2=mongoose.Schema({
//   emname:{
//     type:String,
//     required:true,
//   },
//   emage:{
//     type:Number,
//     required:true,
//   },
//   emid:{
//     type:Number,
//     required:true,
//   }
// })
//--------------------->modal('collection name',Schema(document-->set of data))
// const Employee=mongoose.model("Employeedetails",Schema2)
const Vehicles=mongoose.model('vehicleInformation',vehicleDetails)

export  {Vehicles}