import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
   
    return (
            <button onClick={props.clickHandler}>{props.buttonText}</button>
    );
}

Button.propTypes= {
	buttonText: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired
}


export default Button;