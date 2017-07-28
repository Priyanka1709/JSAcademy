import React from "react";
import { Route } from 'react-router-dom';

const componentMap= {
    "/home": ""
}

const RightPane = (props) => {
   
    return (
        <section>
            <Route path={`${props.match.url}/:value`} component={(props) => {
                debugger;
            }}/>
        </section>
    )
}

export default RightPane;