
import React from 'react'
import './ListRecipes.css'
import Recipe from './Recipe'

class ListRecipes extends React.Component{
    constructor(props) {
        super(props)
    }

    
   
    render() {
        const { recipes } = this.props
        return(
            <div className="recipes-container">
            {
                recipes.map(({id, name, ingredients, url}) =>     
                         <Recipe 
                            key= {id}
                            index = {id}
                            name = {name}
                            ingredients = {ingredients}
                            url = {url}
                            displayDetailOfRecipe = {this._displayDetailOfRecipe}
                         />
                         )
            }
       </div>
        )
    }
}




export default ListRecipes