import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Skills from "./pages/Skills/Skills";
import Interest from "./pages/Interest/Interest";
import Awards from "./pages/Awards/Awards";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={About}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/experience" exact component={Experience}/>
                        <Route path="/education" component={Education}/>
                        <Route path="/skills" component={Skills}/>
                        <Route path="/interest" component={Interest}/>
                        <Route path="/awards" component={Awards}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
