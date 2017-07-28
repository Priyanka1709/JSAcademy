import React from "react";
import { Route } from 'react-router-dom';
import HomeIntroduction from "../home/introduction"

const componentMap= {
    "/home/Introduction": HomeIntroduction
}

const RightPane = (props) => {
   
    return (
        <section>
            <Route path={`${props.match.url}/:value`} component={(props) => {
                debugger;
                return (
                    componentMap[props.match.url]
                )
            }}/>
        </section>
    )
}

export default RightPane;