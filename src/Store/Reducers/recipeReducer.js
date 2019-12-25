
import {data} from '../../Helpers/RecipesData'
const initialState = { recipes: [...data] }

function recipeReducer(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'ADD_RECIPE':
            nextState = {
                ...state,
                recipes: [...state.recipes, action.value]
            }
        return nextState||state    
        default:
            return state
    }
} 

export default recipeReducer