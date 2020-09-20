import React from 'react';
// import Routes from "../routes";
import Sidebar from "./Sidebar";


function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{Width: '80%'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
