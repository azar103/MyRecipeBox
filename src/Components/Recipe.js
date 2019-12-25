import React from 'react'
import './Recipe.css'
import { Link } from 'react-router-dom'


class Recipe extends React.Component {
   constructor(props){
      super(props)
      
   }

   render() {
      const { index, name, url } = this.props
     
      return(
         <Link to={`/recipe/${index}`} style={{textDecoration: 'none'}} >
         <ul>
               <li id="image-item">
                <span><img src={url} alt="img" className="img"/>
               </span>
               </li>
            <li id="description-item">{name}</li>
         </ul> 
         </Link>   
      )
   }
}


export default Recipe