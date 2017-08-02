import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";

class Body extends React.Component{
   
    render(){
        return (
            <Switch>
                <Route path={`/home`} component={Home}/>
                <Route path={`/about`} component={About}/>
                <Route path={`/contact`} component={Contact}/>
                <Redirect exact path={`/`} to={`/home`}/>
            </Switch>
        );
    }
}

export default Body;