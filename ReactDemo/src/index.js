import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListContainer from "./components/listContainer";


ReactDOM.render(
	<Router>	
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/topics" component={ListContainer}/>
		</div>
	</Router>,
	document.getElementById("container")
);