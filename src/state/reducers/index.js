import { combineReducers } from "redux";
import addreducer from "./addreducer";
import countreducer from "./countreducer";
import statereducer from "./statereducer";

const reducers = combineReducers({
    shop : addreducer,
    count : countreducer,
    setstate : statereducer
})

export default reducers

