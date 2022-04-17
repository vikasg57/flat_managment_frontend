import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from './Home'
import {AddFlat} from './AddFlat'

export const Routehandler = () => {
  return (
   
        <Routes>

            <Route path={"/addflat"} element={<AddFlat/>} />

            <Route path={"/"} element={<Home/>} />
        

        </Routes>


   
  )
}
