import React from "react";
import { Route } from 'react-router-dom';
import LeftPane from '../leftPane/leftPane';
import RightPane from '../rightPane/rightPane';

class Contact extends React.Component{
    render(){
        return (
            <div className="body">
               <LeftPane items={["Contacts"]} match={this.props.match}/>
               <RightPane match={this.props.match}/>
            </div>
        );
    }
}

export default Contact;