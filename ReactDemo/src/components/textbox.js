import React from "react";
import PropTypes from "prop-types";

class TextBox extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return <input type="text" value={this.props.myText} onChange={this.props.changeHandler}/>
	}
	
}

TextBox.propTypes= {
	myText: PropTypes.string,
	changeHandler: PropTypes.func.isRequired
}

TextBox.defaultProps= {
	myText: "test1"
}

export default TextBox;