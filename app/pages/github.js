import React from "react";
import Markdown from 'react-remarkable';

import * as OpenSourceActions from "../actions/OpenSourceActions";
import OpenSourceStore from "../stores/OpenSourceStore";

import Repo from '../components/repo';

export default class Main extends React.Component {

    constructor() {
        super();
        this.getRepos = this.getRepos.bind(this);
        this.state = {
            repos: OpenSourceStore.getAll()
        };
    }

    componentWillMount() {
        OpenSourceActions.getRepos();
        OpenSourceStore.on("change", this.getRepos);
    }

    componentWillUnmount() {
        OpenSourceStore.removeListener("change", this.getRepos);
    }

    getRepos() {
        this.setState({
            repos: OpenSourceStore.getAll()
        });
    }

    render() {
        console.log(this.state.repos);
        const repos = this.state.repos.map((r) => {
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