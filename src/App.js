import React from 'react';
import './App.css';
import {data} from './Helpers/RecipesData'
import ListRecipes from './Components/ListRecipes'
import { Router, Link } from 'react-router-dom';
import Store from './Store/configureStore'
import { Provider, connect } from 'react-redux';
import Home from './Components/Home';
class App extends React.Component {

  constructor(props){
    super(props)
  }


  render() {
    return(
         <Home />
    )
  }

}

export default App;
