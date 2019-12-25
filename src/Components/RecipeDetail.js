import React from 'react'
import './RecipeDetail.css'
import { connect} from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
class RecipeDetail extends React.Component {
    
   constructor(props){
     super(props)
   }
  
   
   
    render() {
      const recipe = this.props.recipes[this.props.match.params.id-1];
      console.log(this.props.match.params.id)

        return(   
          <div className="DetailContainer">
             <div className="header">
                 <img src={recipe.url} id="header" />
             </div> 
             <h1>{recipe.name}</h1>
             <div>
             <div className="ingredient_header"> 
             <span id="ingredient_title">Ingredients</span>
             </div>   
             <ul id="ingredients_block">     
                 {recipe.ingredients.map((ingredient)=>(
                     <li id="ingredient">{ingredient}</li>
                 ))}
                </ul>   
            </div>
            
            <div className="ingredient_header"> 
             <span id="ingredient_title">Preparation</span>
             </div>   
             <ol id="ingredients_block">     
                 {recipe.preparation.map((etape)=>(
                     <li id="ingredient">{etape}</li> 
                 ))}
                </ol>   
           
             <div className="video"> 
             <video width="504" height="240" controls autoPlay muted type="video/mp4">
                 <source src={recipe["url_video"]} />
               </video>
             </div>   
            <div className="btn-block">  
            <Fab color="primary" aria-label="edit" id="icon">
              <EditIcon />
           </Fab>
     
            <Fab color="secondary" aria-label="delte">
              <DeleteIcon />
            </Fab>
              </div>   
              <Link to="/" style={{color: 'blue'}} id="link">Go To Home ></Link>
            </div>
         

       

        )
    }
}

const mapStateToProps = (state) => {
    return {
      recipes: state.recipes
    }
}

export default connect(mapStateToProps)(RecipeDetail)


