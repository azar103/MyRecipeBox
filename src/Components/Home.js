import React from 'react'
import ListRecipes from './ListRecipes'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
class Home extends React.Component {
    constructor(props){
        super(props)
    }
    

    render() {

        return(
      <div className="App">
          <h1>Ma  B<img id="icone" src="./img/lunch.png"></img>ite à Recettes</h1>
          <Link to="/addRecipe">  <button id="go_btn">Add Recipe</button></Link>
          <ListRecipes
            recipes = {this.props.recipes}
          />
       </div>
        )
        
    }
    
}

const mapStateToProps = (state) => {
    return {
      recipes: state.recipes
    }
  }
  

export default connect(mapStateToProps)(Home)