import React from "react";

class App extends React.Component{

    constructor(props){
        super(props);
    }

    sum(a,b){
    	return a+b;
    }

    render(){
    	return (
            <div>React App</div>
        );
    }
}

export default App