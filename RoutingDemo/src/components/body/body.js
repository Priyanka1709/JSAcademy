import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./home/home";
import About from "./about/about";

class Body extends React.Component{

    constructor(props){
        super(props)
    }
   
    render(){
        return (
            <div>
                <Route path={`/home`} component={Home}/>
                <Route path={`/about`} component={About}/>
            </div>
        );
    }
}

export default Body;