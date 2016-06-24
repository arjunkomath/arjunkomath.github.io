import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute } from "react-router";

import Layout from './pages/main';
import Home from './pages/home';
import Github from './pages/github';
import Projects from './pages/projects';

import createHashHistory from 'history/lib/createHashHistory'
const history = createHashHistory({ queryKey: false })

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="opensource" name="opensource" component={Github}></Route>
                    <Route path="projects" name="projects" component={Projects}></Route>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.react-root'));