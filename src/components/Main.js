import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Ranking from './Ranking';
import Search from './Search';

class Main extends Component{
  render(){
    return (
      <header>
        <div className="main">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/search" component={Search} />
        </Switch> 
        </div>
      </header>
    )   
  }
}
export default Main;