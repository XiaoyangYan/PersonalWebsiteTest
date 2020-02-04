import React from 'react';
import Banner from "./PersonalWebsite/Banner";
import Header from "./PersonalWebsite/Header";
import Home from "./PersonalWebsite/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
class App extends React.Component {
        
        render() {
                return <Router>
                        <Route path="/" component={Header}></Route>
                </Router>
        }
}

export default App;