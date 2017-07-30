import React from "react";

const HelloWorld = (props) => {
   
    return (
        <div>
            <h4>Hello World</h4>
            <pre>
                ReactDOM.render(
                    <h1>Hello, world!</h1>,
                    document.getElementById('root')
                );
            </pre>
        </div>
    )
}

export default HelloWorld;