import { combineReducers } from "redux";
import userreducer from "./userreducer";

export const rootreducer = combineReducers({
    reducer : userreducer,
})

