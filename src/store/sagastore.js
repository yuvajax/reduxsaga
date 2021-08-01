import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {rootreducer} from '../reducer/rootreducer';
import watcherlist from "../effect/watcher";

const sagamiddleware = createSagaMiddleware()
const Store = createStore(rootreducer, applyMiddleware(sagamiddleware))
sagamiddleware.run(watcherlist)

export default Store