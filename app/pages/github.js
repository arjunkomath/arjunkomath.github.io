import React from "react";
import Markdown from 'react-remarkable';

import { getRepos } from "../actions/OpenSourceActions";

import Repo from '../components/repo';
import { connect } from "react-redux";

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
                    {repos.length ? repos : (<h4>Loading...</h4>)}
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