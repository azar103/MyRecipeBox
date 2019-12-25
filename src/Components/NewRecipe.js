import React from 'react'
import './NewRecipe.css'    
import {connect} from 'react-redux'

class NewRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
          name: "",
          img_url: "",
          video_url: "",
          ingredients: "",
          etapes: ""
        }
        this._addRecipe = this._addRecipe.bind(this)
    }

    _addRecipe(name, img_url, video_url, ingredients, etapes){
        const arr1 = ingredients.split(",");
        const arr2 = etapes.split("/n");
        const id = this.props.recipes.length
        return {id, name, arr1 , img_url, arr2, video_url }
    }
    _changeNameHandler = (event) =>  {
      this.setState({
           name: event.target.value
      })
    }
    _changeIngredientsHandler = (event) => {
      this.setState({
           ingredients: event.target.value
      })
    }
    _changeImageUrlHandler = (event) => {
      this.setState({
        img_url: event.target.value
      })
    }
    _changePreparationsHandler = (event) => {
      this.setState({
        etapes: event.target.value
      })
    }
    _changeVideoUrlHandler = (event) => {
      this.setState({
        video_url: event.target.value
      })
    }
    _submit = (e) => {
       e.preventDefault()
       const recipe = { 
         id: this.props.recipes.length+1,
         name: this.state.name ,
         ingredients: this.state.ingredients.split(","),
         url: this.state.img_url,
         preparation: this.state.etapes.split("."),
         url_video: this.state.video_url
       }
       this.props.dispatch({type: 'ADD_RECIPE', value: recipe })   
       console.log(this.props.recipes)
    }

    render() {
        return(
         <div>
           <h1>Her is the New Recipe...</h1>
           <form className="admin-add-recipe"  onSubmit={this._submit}>
               <input type="text" id="name" placeholder="Nom de la recette" value={this.state.name} onChange={this._changeNameHandler}/>
               <input type="text" id="img_address" placeholder="Adresse de l'image" value={this.state.img_url}  onChange={this._changeImageUrlHandler}/>
               <input type="text" id="video_address" placeholder="Adresse de video" value={this.state.video_url}  onChange={this._changeVideoUrlHandler}/>
               <textarea rows="3" id="ingredients" type="text" placeholder="Liste des ingrédients séparés par une virgule" value={this.state.ingredients}  onChange={this._changeIngredientsHandler}/>
               <textarea rows="15" id="instructions" type="text" placeholder="Liste des instructions( une par ligne)" value={this.state.etapes} onChange={this._changePreparationsHandler}/>
               <button type="submit">+ Ajouter une recette</button>
           </form>
         </div>
        )
        
    }
  
}
const mapStateToProps = (state) => {
    return {
      recipes: state.recipes
    }
  }
  

export default connect(mapStateToProps)(NewRecipe)

