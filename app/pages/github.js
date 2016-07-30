import React from "react";
import Markdown from 'react-remarkable';

import { getRepos } from "../actions/OpenSourceActions";

import Repo from '../components/repo';
import { connect } from "react-redux";

import Loader from 'halogen/ScaleLoader';

class Github extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.props.dispatch(getRepos())
    }

    render() {
        const repos = this.props.repos.map((r) => {
            return (<Repo repo={r} key={r.id} />)
        })
        return (
            <div>
                <Markdown>
                    ### Open Source Contributions
                    {repos.length ? repos : (<Loader color="#607D8B" margin="4px"/>)}
                </Markdown>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        repos: state.OpenSourceReducer.repos
    };
}

export default connect(mapStateToProps)(Github);