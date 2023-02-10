import { combineReducers } from "redux";
import catalogReducer from "./coins/reducers";

const rootReducer = combineReducers({ catalogReducer })

export default rootReducer;