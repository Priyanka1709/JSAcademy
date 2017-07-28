import React from "react";
import PropTypes from "prop-types";
import ListItem from "./listItem";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const ListContainer= (props) => {
    
    return (
        <div>
            <ul>
                {
                    ["React","Redux","Flux","React Router"].map((val, i) => 
                        <ListItem key={i} value={val} match={props.match} />
                    )
                }
            </ul>
            <Route path={`${props.match.url}/:name`} component={(props) => (<p>props.match.params.name</p>)}/>
        </div>
    );  
}

// ListContainer.defaultProps={
//     listItems: ["React","Redux","Flux","React Router"]
// }

export default ListContainer;