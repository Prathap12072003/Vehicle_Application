import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import VehiclesForms from './Components/VehiclesForms'
import VehiclesTable from './Components/VehiclesTable'
import VehicleUpdate from './Components/VehicleUpdate'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<VehiclesForms />}   exact />       
      <Route  path="/table" element={<VehiclesTable />}   exact />       
      <Route  path="/:id/update" element={<VehicleUpdate />}   exact />       
           
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
