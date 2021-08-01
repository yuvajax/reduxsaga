import {FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE} from '../actions/action'

const initialstate = {
    loading : false,
    user : [],
    error : ''
}


function userreducer(state = initialstate,action){
    switch(action.type){
        case FETCH_USER_REQUEST:
            console.log("fetchuserrequest called")
            console.log(state.loading,state.user)
            return{
                ...state,
                loading :true
            }
        case FETCH_USER_SUCCESS:
            console.log("fetchusersuccess called")
            console.log(state.loading,state.user)
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:''
            }
            case FETCH_USER_FAILURE:
                console.log("fetchuserfailure called")
                console.log(state.loading,state.user)
                return{
                    ...state,
                    loading:false,
                    user:[],
                    error: action.payload
                }
            

        default : 
        console.log("fetch default user")
        return state
    }
}

export default userreducer