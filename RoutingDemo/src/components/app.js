import React from "react";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";

class App extends React.Component{
    render(){
        return (
            <div className="app container-fluid">
                <Header/>
                <Body/>
                <Footer />
            </div>
        );
    }
}

export default App;