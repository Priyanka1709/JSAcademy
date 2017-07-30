import React from "react";
import { Route } from 'react-router-dom';
import HomeIntroduction from "../home/introduction";
import HomeConclusion from "../home/conclusion";
import CommunitySupport from "../community/support";
import CommunityConferences from "../community/conferences";
import DocsInstallation from "../docs/installation";
import DocsHelloWorld from "../docs/helloworld";

const componentMap= {
    "/home/Introduction": HomeIntroduction,
    "/home/Conclusion": HomeConclusion,
    "/community/Support": CommunitySupport,
    "/community/Conferences": CommunityConferences,
    "/docs/Installation": DocsInstallation,
    "/docs/Hello World": DocsHelloWorld,
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