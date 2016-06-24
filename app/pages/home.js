import React from "react";
import Markdown from 'react-remarkable';
import FontAwesome from 'react-fontawesome';

import Specs from '../components/specs';

import data from '../data/data.js';
import profileButtons from '../data/profile-buttons.js';

export default class Home extends React.Component {

    renderSpecs() {
        return data.map((item, key) => {
            return (<Specs key={key} title={item.title} feat={item.feat} icon={item.icon}/>)
        });
    }

    renderButtons() {
        return profileButtons.map((b, key) => {
            return (<div class="btn" key={key}><a href={b.link}><FontAwesome name={b.icon}/> {b.label}</a></div>)
        });
    }

    render() {
        return (
            <div>
                <Markdown>
                    {this.renderButtons()}
                    ## Technical Specifications
                    {this.renderSpecs()}
                </Markdown>
            </div>
        )
    }

}