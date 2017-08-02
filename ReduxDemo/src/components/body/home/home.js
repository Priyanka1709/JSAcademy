import React from "react";
import HomeLeftPane from './homeLeftPane';
import HomeRightPane from './homeRightPane';

class Home extends React.Component{

    render(){
        return (
            <div className="body">
               <HomeLeftPane match={this.props.match}/>
               <HomeRightPane match={this.props.match}/>
            </div>
        );
    }
}

export default Home;