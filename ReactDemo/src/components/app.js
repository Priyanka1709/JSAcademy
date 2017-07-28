import React from "react";
import MyButton from "./button";
import TextBox from "./textbox";
import ListContainer from "./listContainer";
import ReactDOM from "react-dom";

class App extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			myText: "test",
			listItems: ["test1","test2"]
		};
		this.addButtonClick= this.addButtonClick.bind(this);
		this.clearButtonClick= this.clearButtonClick.bind(this);
		this.textBoxChange= this.textBoxChange.bind(this);
	}

	addButtonClick(){
		
	}

	clearButtonClick(){
		// debugger;
		ReactDOM.findDOMNode(this.refs.addButton).focus();
	}

	textBoxChange(e){
		
		this.setState({
			myText: e.target.value
		})
	}

	render(){
		return(	
			<div>
				<TextBox ref="textInput" myText={this.state.myText} changeHandler={this.textBoxChange}/>
				<br />
				<br />
				<MyButton ref="addButton" buttonText={"Add"} clickHandler={this.addButtonClick}/>
				<MyButton buttonText={"Clear"} clickHandler={this.clearButtonClick}/>
				<br/>
				<ListContainer match={this.props.match} listItems={this.state.listItems} />
			</div>
		);
	}
	
}

export default App;