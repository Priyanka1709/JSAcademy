import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const ListItem= (props) => {
    let url= props.match.url === '/'? props.match.url: `${props.match.url}/`;
    return (
        <li>
            <Link to={`${url}${props.value}`}>{props.value}</Link>
        </li>
        
    );
}

export default ListItem;