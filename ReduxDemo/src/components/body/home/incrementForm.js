import React from "react";

import Button from "./button";

class IncrementForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
			textInput: 10,
        };
        
        this.addButtonHandler= this.addButtonHandler.bind(this);
        this.subtractButtonHandler= this.subtractButtonHandler.bind(this);
        this.textBoxChangeHandler= this.textBoxChangeHandler.bind(this);
    }

    addButtonHandler(){
        this.setState(prevState=> 
            {
                textInput: prevState.textInput++
            }
        );
    }

    subtractButtonHandler(){
        this.setState(prevState=> 
            {
                textInput: prevState.textInput--
            }
        );
    }

    textBoxChangeHandler(e){
        this.setState({
			textInput: e.target.value
		})
    }

    render(){
        return (
            <div className="center">
               <input value= {this.state.textInput} type= "number" onChange={this.textBoxChangeHandler}/>
               <br/><br/>
               <div>
                    <Button buttonText="+" clickHandler= {this.addButtonHandler}/>
                    <Button buttonText="-" clickHandler= {this.subtractButtonHandler}/>
                </div>
            </div>
        );
    }
}

export default IncrementForm;