import React, { useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addnewflat, handleascflat, handledscflat,handledblockfilter } from '../Redux/action'

export const Home = () => {

    const dispatch = useDispatch()

    const {flat,loading,error}=useSelector((store)=>store.flat)

    // const flatobj=useSelector((store)=>store.flat)

    console.log("flatobj",flat)
    console.log("loading",loading)
    console.log("error",error)

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



   return loading?("loading...."):error?("Error....."):( 
    <div>
      <button onClick={handlesortasc}>SORT BY FLAT NO LOWER TO HIGHER </button>
      <button onClick={handlesortdsc}>SORT BY FLAT NO HIGHER TO LOWER </button>

      <select name="" id="" onChange={handlefilter}>
        <option value="">....</option>
        <option value="a">block a</option>
        <option value="b">block b</option>
        <option value="c">block c</option>
      </select>

      <Link to={"/addflat"}>
        <button> ADD FLAT</button>
      </Link>

      {flat.map(({ block, flat_no, image, resident_id, _id }) => (
        <div key={_id}>
          <img src={image} alt="" />
          <h3>block no: {block}</h3>
          <h3>flat no: {flat_no}</h3>
          {/* {console.log(resident_id[0])} */}
        </div>
      ))}
    </div>
  );
}   
