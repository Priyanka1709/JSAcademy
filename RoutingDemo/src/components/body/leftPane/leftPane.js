import React from "react";
import ListItem from "./listItem";

const LeftPane = (props) => {
    return (
        <section className="leftPane">
            <ul>
                {
                    props.items.map((value, index) => 
                        <ListItem value={value} key= {index} match={props.match}/>
                    )
                }
            </ul>
        </section>
    )
}

export default LeftPane;