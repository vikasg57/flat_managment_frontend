import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from './Home'
import {AddFlat} from './AddFlat'
import {Flatdetails} from './Flatdetails'

export const Routehandler = () => {
  return (
   
        <Routes>

            <Route path={"/addflat"} element={<AddFlat/>} />
            <Route path={"/flatdetails"} element={<Flatdetails/>} />


            <Route path={"/"} element={<Home/>} />
        

        </Routes>


   
  )
}
