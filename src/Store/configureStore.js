import { createStore, combineReducers } from "redux";
import recipeReducer from "./Reducers/recipeReducer";


export default createStore(recipeReducer)