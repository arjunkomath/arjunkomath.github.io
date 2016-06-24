import React from 'react';

export default class Project extends React.Component {

    render() {
        return (
            <div>
                <h4><a href={this.props.data.link}>{this.props.data.label}</a></h4>
                <p>{this.props.data.description}</p>
            </div>
        );
    }

}