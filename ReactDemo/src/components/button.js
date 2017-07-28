import React from "react";
import PropTypes from "prop-types";
	
class MyButton extends React.Component{
	constructor(props){
		super(props);
		console.log("constructor");
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){
		console.log("componentDidMount");
	}

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps");
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.props.buttonText === nextProps.buttonText){
			return false;
		}
		return true;
	}

	componentWillUpdate(){
		console.log("componentWillUpdate");
	}

	componentDidUpdate(){
		console.log("componentDidUpdate");
	}

	componentWillUnmount(){
		console.log("componentWillUnmount");
	}

	render(){
		console.log("updated");
		return <input type="button" value={this.props.buttonText} onClick={this.props.clickHandler}/>
	}
	
}

MyButton.propTypes= {
	buttonText: PropTypes.string,
	clickHandler: PropTypes.func.isRequired
}

MyButton.defaultProps= {
	buttonText: "Add"
}

export default MyButton;