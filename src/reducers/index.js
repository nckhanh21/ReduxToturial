 
import { combineReducers } from "redux";
import hobbyReducer from "./hobby";
import userReducer from "./user";

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});
export default rootReducer;