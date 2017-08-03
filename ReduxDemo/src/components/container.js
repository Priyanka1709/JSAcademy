import React from "react";
import * as stateActions from "../actions/actions";
import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = state => {
    return {
        counter: state.state.counter,
        fetching: state.state.fetching
    }
}

const mapDispatchToProps= dispatch => {
    return {
        increase: ()=> dispatch(stateActions.IncrementCounter()),
        decrease: ()=> dispatch(stateActions.DecrementCounter()),
        reset: () => dispatch(stateActions.ResetCounter()),
        increaseAsync: () => setTimeout(function(){
            dispatch(stateActions.IncrementCounter());
        },2000),
        increaseAsyncUsingThunk: ()=> dispatch(stateActions.startIncrementAsync()),
        increaseAsyncUsingSaga: ()=> dispatch(stateActions.IncrementAsync()),
        getData: ()=> dispatch(stateActions.GetData()),
    }
}

class AppContainer extends React.Component{
   
    render(){
        return (
           <App counter={this.props.counter} increaseAsyncUsingThunk= {this.props.increaseAsyncUsingThunk} increaseAsyncUsingSaga={this.props.increaseAsyncUsingSaga} increaseAsync={this.props.increaseAsync} increase={this.props.increase} decrease= {this.props.decrease} btnState={this.props.fetching} getData={this.props.getData} reset={this.props.reset}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);