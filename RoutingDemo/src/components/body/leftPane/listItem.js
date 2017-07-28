import React from "react";
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li>
            <Link to= {`${props.match.url}/${props.value}`}>
                {props.value}
            </Link>
        </li>
    )
}

export default ListItem;