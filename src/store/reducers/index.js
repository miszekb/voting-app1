import { combineReducers } from "redux";
import voters from "./voters";
import candidates from "./candidates";

export default combineReducers({
    voters,
    candidates
})