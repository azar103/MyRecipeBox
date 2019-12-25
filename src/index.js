import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import RecipeDetail from './Components/RecipeDetail';
import NewRecipe from './Components/NewRecipe';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import Store from '../src/Store/configureStore'
const routing = (
    <Provider store={Store}>
    <Router>
        <div>
            <Route  exact path="/" component={App} />
            <Route path="recipes" component={Home}/>
            <Route path="/recipe/:id" component={RecipeDetail} />
            <Route path="/addRecipe" component={NewRecipe}/>
        </div>
    </Router>
    </Provider> 
);
ReactDOM.render(routing , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
