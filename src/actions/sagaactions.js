import {FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from "./action"
  
export const fetchuserrequest = () =>{
    return{
        type: FETCH_USER_REQUEST
    }
} 
export const fetchusersuccess =(user) =>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
        
    }
}
export const fetchuserfailure =(error) =>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}
