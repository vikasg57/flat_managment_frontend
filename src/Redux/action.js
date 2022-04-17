import axios from "axios";

export const ADD_FLAT="ADD_FLAT"

export const ADD_RESIDENT="ADD_RESIDENT"

export const ADD_FLAT_LOADING="ADD_FLAT_LOADING"

export const ADD_FLAT_FAILURE="ADD_FLAT_FAILURE"


export const addflat=(payload)=>({

    type: ADD_FLAT,
    payload,

})

export const addflatloading=(payload)=>{

    return{

        type:ADD_FLAT_LOADING
    }

}

export const addflatfailure=(payload)=>{

    return{

        type:ADD_FLAT_FAILURE
    }

}

export const addnewflat=()=>(dispatch)=>{
    dispatch(addflatloading())

    axios.get("http://localhost:5500/flat").then((res)=>{

    dispatch(addflat(res.data))
    }).catch((er)=>{
        dispatch(addflatfailure(er))
    })
}

export const handleascflat=()=>(dispatch)=>{
     dispatch(addflatloading())

    axios.get("http://localhost:5500/flat/sort/asc").then((res)=>{

    dispatch(addflat(res.data))
    }).catch((er)=>{
        dispatch(addflatfailure(er))
    })
}


export const handledscflat=()=>(dispatch)=>{
    dispatch(addflatloading())
    axios.get("http://localhost:5500/flat/sort/dsc").then((res)=>{

    dispatch(addflat(res.data))
    }).catch((er)=>{
        dispatch(addflatfailure(er))
    })
}

export const handledblockfilter=(value)=>(dispatch)=>{
    dispatch(addflatloading())
    axios.get(`http://localhost:5500/flat/block?block=${value}`).then((res)=>{

    dispatch(addflat(res.data))
    }).catch((er)=>{
        dispatch(addflatfailure(er))
    })
}



