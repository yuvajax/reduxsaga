import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_USER_REQUEST} from '../actions/action';
import workerlist from "./worker";

function* watcherlist(){
    yield takeEvery(FETCH_USER_REQUEST,workerlist)
}

export default watcherlist