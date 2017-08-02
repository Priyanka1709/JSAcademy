import React from "react";
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";

import IncrementForm  from './incrementForm';

const HomeRightPane = (props) => {
   
    return (
            <section className="rightPane">
                <Route path={`${props.match.url}/incrementform`} component={IncrementForm}/>
            </section>
        );
}

HomeRightPane.propTypes= {
	match: PropTypes.object.isRequired
}

export default HomeRightPane;