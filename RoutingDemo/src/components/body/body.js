import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./home/home";
import Community from "./community/community";
import Docs from "./docs/docs";

class Body extends React.Component{

    constructor(props){
        super(props)
    }
   
    render(){
        return (
            <Switch>
                <Route path={`/home`} component={Home}/>
                <Route path={`/community`} component={Community}/>
                <Route path={`/docs`} component={Docs}/>
                <Redirect exact path={`/`} to={`/home`}/>
            </Switch>
        );
    }
}

export default Body;