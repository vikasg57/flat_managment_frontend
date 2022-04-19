import axios from "axios";
export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signuploading=()=>{

    return{
        type:SIGNUP_LOADING,
    }
}
export const signupsuccess=()=>{

    return{
        type:SIGNUP_SUCCESS,
       
    }
}
export const signupfailure=(payload)=>{

    return{
        type:SIGNUP_LOADING,
        payload:payload
    }
}

export const signup=(payload)=>(dispatch)=>{
    dispatch(signuploading())
    axios.post("http://localhost:5500/register",payload).then((res)=>{
        dispatch(signupsuccess())
    }).catch((er)=>{
        dispatch(signupfailure(er.message))
    })
}