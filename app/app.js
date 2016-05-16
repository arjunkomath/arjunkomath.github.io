import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
var Markdown = require('react-remarkable');

import data from './data/data.js';
import profileButtons from './data/profile-buttons.js';
import projects from './data/projects.js';

class Specs extends React.Component {

    renderFeat() {
        var rows = '';
        for (var key in this.props.feat) {
            rows += this.props.feat[key];
            if (key != (this.props.feat.length - 1))
                rows += ', ';
        }
        return rows;
    }

    render() {
        return (
            <span>
                <b><FontAwesome name={this.props.icon}/> {this.props.title} </b>
                <br/>
                {this.renderFeat()}
                <br /><br />
            </span>
        );
    }

}

class Project extends React.Component {

    render() {
        return (
            <div>
                <h4><a href={this.props.data.link}>{this.props.data.label}</a></h4>
                <p>{this.props.data.description}</p>
            </div>
        );
    }

}

class App extends React.Component {

    renderSpecs() {
        var rows = [];
        for (var key in data) {
            var item = data[key];
            rows.push(<Specs key={key} title={item.title} feat={item.feat} icon={item.icon}/>)
        }
        return rows;
    }

    renderButtons() {
        var buttons = [];
        for (var key in profileButtons) {
            var b = profileButtons[key];
            buttons.push(<div className="btn" key={key}><a href={b.link}><FontAwesome name={b.icon}/> {b.label}</a></div>)
        }
        return buttons;
    }

    renderProjects() {
        var p = [];
        for (var key in projects) {
            p.push(<Project data={projects[key]} key={key}/>)
        }
        return p;
    }

    render() {
        return (
            <div>
                <Markdown>
                    # Arjun Komath
                    {this.renderButtons()}
                    <br />
                    ## Technical Specifications
                    <br />
                    {this.renderSpecs()}
                    <br />
                    ## Latest Projects
                    {this.renderProjects()}
                </Markdown>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.react-root'));