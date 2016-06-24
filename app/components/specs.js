import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Specs extends React.Component {

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