import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const HomeLeftPane = (props) => {
    return (
        <section className="leftPane">
            <ul>
               <li>
                    <Link to= {`${props.match.url}/incrementform`}>
                        {"Increment Form"}
                    </Link>
                </li>
            </ul>
        </section>
    )
}

HomeLeftPane.propTypes= {
	match: PropTypes.object.isRequired
}

export default HomeLeftPane;