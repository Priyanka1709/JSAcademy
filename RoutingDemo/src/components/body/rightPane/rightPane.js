import React from "react";
import { Route } from 'react-router-dom';
import HomeIntroduction from "../home/introduction";
import HomeConclusion from "../home/conclusion";

const componentMap= {
    "/home/Introduction": HomeIntroduction,
    "/home/Conclusion": HomeConclusion,
}

const RightPane = (props) => {
   
    return (
        <section className="rightPane">
            <Route path={`${props.match.url}/:value`} component={(props) => {
                debugger;
                var Comp= componentMap[props.match.url];
                return (
                    <Comp />                
                )
            }}/>
        </section>
    )
}

export default RightPane;