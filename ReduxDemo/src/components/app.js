import "./app.css";
import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div id= "state_container">{this.props.counter}</div>
                <br/>
                <button onClick={this.props.increase}>Increase</button>
                <button onClick={this.props.increaseAsync}>Increase Async</button>
                <button onClick={this.props.increaseAsyncUsingThunk}>Increase Async Thunk</button>
                <button onClick={this.props.increaseAsyncUsingSaga}>Increase Async Saga</button>
                <button onClick={this.props.decrease}>Decrease</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

export default App;