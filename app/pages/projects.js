import React from "react";
import Markdown from 'react-remarkable';

import projects from '../data/projects.js';
import Project from '../components/project';

export default class Main extends React.Component {

    renderProjects() {
        return projects.map((project, key) => {
            return (<Project data={project} key={key}/>)
        });
    }

    render() {

        return (
            <div>
                <Markdown>
                    ## Latest Projects
                    {this.renderProjects()}
                </Markdown>
            </div>
        )
    }

}