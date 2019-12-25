const initialState = { recipes: [] }

function getRecipes(state = initialState, action) {
    let nextState;
    switch(action){
          case 'GET_DATA':
              nextState = {
                  ...state,
                  recipes: [...action.value]
              }

          return nextState || state
          default:
              return state;     
    }
} 

export default getRecipes