import React from "react";

const Contact = (props) => {
    return (
            <div className="body">
                <form onSubmit={(e)=> {alert('Form submitted')}}>
                    <label>Name: </label>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <label>Phone Number: </label>
                    <br/>
                    <input type="text"/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>               
            </div>
        );
}

export default Contact;