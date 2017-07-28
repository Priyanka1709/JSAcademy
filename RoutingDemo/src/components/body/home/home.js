import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeftPane from '../leftPane/leftPane';
import RightPane from '../rightPane/rightPane';

class Home extends React.Component{

    render(){
        return (
            <div>
               <LeftPane items={["Introduction","Conclusion"]} match={this.props.match}/>
               <RightPane match={this.props.match}/>
            </div>
        );
    }
}

export default Home;