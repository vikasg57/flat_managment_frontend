import React, { useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import {
  addnewflat,
  handleascflat,
  handledscflat,
  handledblockfilter,
  handledtypesearch,
  handleflatdetails,
} from "../Redux/action";

export const Home = () => {

    const navigate=useNavigate()

    const dispatch = useDispatch()

    const {flat,loading,error,singleflat}=useSelector((store)=>store.flat)

    // const flatobj=useSelector((store)=>store.flat)

    // console.log("flatobj",flat)
    // console.log("loading",loading)
    // console.log("error",error)

    console.log(singleflat)


    useEffect(() => {
    
     getallflat()


    }, [])

    const getallflat=()=>{

        dispatch(addnewflat())
    }

    const handlesortasc=()=>{
        dispatch(handleascflat())

    }
    const handlesortdsc=()=>{
        dispatch(handledscflat());

    }

    const handlefilter=(e)=>{

    

         dispatch(handledblockfilter(e.target.value));
    }

    const handlesearch=(e)=>{

        setTimeout(() => {
            
        dispatch(handledtypesearch(e.target.value));
            
        }, 1000);

    }

    const handledetails=(id)=>{

      dispatch(handleflatdetails(id));

      navigate("/flatdetails")

    }


   return loading ? (
     <div className="lds-roller">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
     </div>
   ) : error ? (
     "Error....."
   ) : (
     <div>
       <h1 style={{ textTransform: "uppercase", color: "crimson" }}>
         Flat Managment
       </h1>

       <button className="button-18" onClick={handlesortasc}>
         SORT BY FLAT NO LOWER TO HIGHER{" "}
       </button>
       <button className="button-18" onClick={handlesortdsc}>
         SORT BY FLAT NO HIGHER TO LOWER{" "}
       </button>

       <Link to={"/addflat"}>
         <button className="button-18"> ADD FLAT</button>
       </Link>

       <div className="filter_div">
         <input
           type="text"
           placeholder="serach by block number"
           onInput={handlesearch}
           className="input_tag"
         />

         <select className="select_tag" name="" id="" onChange={handlefilter}>
           <option value="">....</option>
           <option value="owner">owner</option>
           <option value="teanant">teanant</option>
         </select>
       </div>

       <div className="grid_homepage">
         {flat.map(({ block, flat_no, image, resident_id, _id, type }) => (
           <div key={_id} onClick={() => handledetails(_id)}>
             <div>
               {" "}
               <img src={image} alt="" />
             </div>

             <h3>type: {type} </h3>
             <h3>block no: {block}</h3>
             <h3>flat no: {flat_no}</h3>
             {/* {console.log(resident_id[0])} */}
           </div>
         ))}
       </div>
     </div>
   );
}   
