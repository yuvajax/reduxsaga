import { call, put ,delay} from "@redux-saga/core/effects";
import axios from "axios";
import {fetchusersuccess,fetchuserfailure} from "../actions/sagaactions"

function* workerlist(action){
    try {
        const url = "https://randomuser.me/api/?results=10";
        const response = yield call(axios.get,url)
        console.log("worker",response)
        console.log("calling fetchusersuccess")
        // yield delay(1000)
        yield put(fetchusersuccess(response.data.results))
    } catch (error) {
        console.log("calling fetchuserfailure")
        yield put(fetchuserfailure(error.message))
    }
}

export default workerlist