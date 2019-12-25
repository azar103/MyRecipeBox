import { createStore } from "redux";
import getRecipes from "./Reducers/recipeReducer";


export default createStore(getRecipes)