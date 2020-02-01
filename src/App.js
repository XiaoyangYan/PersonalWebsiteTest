import React from 'react';
import Home from "./FoodHomeExercise/Home/Home";
import Banner from "./PersonalWebsite/Banner";
import Header from "./PersonalWebsite/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
class App extends React.Component {
        
        render() {
                return <Router>
                        <Route path="/" component={Header}></Route>
                </Router>
        }
}

export default App;