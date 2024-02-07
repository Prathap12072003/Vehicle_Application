import express from 'express';
import {getvehicledetails,postVehilesData,getvehiclesid, delvehicles, updateVehicles,} from '../Controller/controller.js';
const route=express.Router();


route.get('/vehiclesdetails',getvehicledetails),
route.get('/:id',getvehiclesid)
route.delete('/:delvehiclesid/delete',delvehicles)
route.post('/vehiclesdetails/post',postVehilesData),
route.put('/:id/update',updateVehicles)
// route.post('/post',postVehiles)
// route.get('/vehile/name',vehicleName)
// route.get('/vehile/modal',vehicleModal)
// route.get('/vehile/numplate',vehicleNumplate)
// route.get('/vehile/type',vehicleType)

export default route;