import {ADD_FLAT, ADD_FLAT_LOADING,ADD_FLAT_FAILURE} from "./action"

const initialstate={

    flat:[],
    loading:false,
    error:false

}

export const reducer=(store=initialstate,{type,payload})=>{

    switch(type){

        case ADD_FLAT:

        return {
            ...store,
            flat: payload,
            loading:false,
            error:false

        }

        case ADD_FLAT_LOADING:
            
        return {
            ...store,
            loading:true,
            error:false,


        }

        case ADD_FLAT_FAILURE:

        return {
            ...store,
            loading:false,
            error:true

        }

        default:
            return store
    }
}