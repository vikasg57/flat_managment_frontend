
import { LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT } from "./action";

const initialState = {
    Loading: false,
    Success: false,
    Failure: false,
    Authenticated: false,
    token : "",
    name :"",
    error : ""
}
export const loginnreducer=(store=initialState,{type,payload})=>{

    switch(type){
        case LOGIN_LOADING:
            return{
                ...store,
                Loading: true,
                Success:false,
                Failure:false,
                Authenticated:false
            }

        case LOGIN_SUCCESS:
            return{
                ...store,
                Success: true,
                Authenticated:true,
                Loading:true,
                failure:false,
                token:payload.token,
                name:payload.name
            }

            case LOGIN_FAILURE:
                return{
                    ...store,
                    Loading:false,
                    Failure:true,
                    Success:true,
                    Authenticated:false,
                    error:payload,
                    token:null,
                    name:null,
                }
            case LOGOUT:

            return{
                ...initialState
            }


        default:
            return {
                ...store,
            }
    }

}