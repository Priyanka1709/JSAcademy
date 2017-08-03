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
                <div id= "state_container" className="form-control">{this.props.counter}</div>
                <div className="buttonArea">
                    <button className="btn" onClick={this.props.increase}>Increase</button>
                    <br/><br/>
                    <button className="btn" onClick={this.props.increaseAsync}>Increase Async</button>
                    <br/><br/>
                    <button className="btn" onClick={this.props.increaseAsyncUsingThunk}>Increase Async Thunk</button>
                    <br/><br/>
                    <button className="btn" onClick={this.props.increaseAsyncUsingSaga}>Increase Async Saga</button>
                    <br/><br/>
                    <button className="btn" onClick={this.props.decrease}>Decrease</button>
                    <br/><br/>
                    <button className="btn" onClick={this.props.reset}>Reset</button>
                    <br/><br/>
                    <button disabled={this.props.btnState} className="btn btn-primary" onClick={this.props.getData}>Get Data</button>
                </div>
            </div>
        )
    }
}

export default App;