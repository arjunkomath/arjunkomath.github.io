import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Repo extends React.Component {

    render() {
        const { repo } = this.props;
        return (
            <span>
                <a href={repo.html_url} target="_blank"><h4>{repo.full_name}</h4></a>
                <p>{repo.description}</p>
                <p>{repo.stargazers_count} <FontAwesome name="star"/></p>
            </span>
        );
    }

}