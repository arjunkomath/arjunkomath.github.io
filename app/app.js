import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import AppBar from 'material-ui/lib/app-bar';
import { Grid, Row, Cell } from 'react-inline-grid';
import FontAwesome from 'react-fontawesome';

import data from './data.js';

class Specs extends React.Component {

	renderFeat() {
		var rows = ''; 
		for (var key in this.props.feat) {
			rows += this.props.feat[key];
			if(key != (this.props.feat.length-1))
				rows += ', ';
		} 
		return rows;
	}

	render() {
		return (
			<Cell is="6 tablet-6 phone-6">
			<div>
			<h3><FontAwesome name={this.props.icon} /> {this.props.title}</h3>
			<p>{this.renderFeat()}</p>
			</div>
			</Cell>
			);
	}

}

class App extends React.Component {

	renderSpecs() {
		var rows = []; 
		for (var key in data) {
			var item = data[key];
			rows.push(<Specs key={key} title={item.title} feat={item.feat} icon={item.icon} />)
		} 
		return rows;
	}

	render() {
		return (
			<div>

			<Grid>
			<Row is="center">
			<Cell is="6 tablet-6 tablet-6">
			<AppBar title="Arjun Komath" />
			</Cell>
			</Row>
			</Grid>

			<Grid>
			<Row is="center">
			<Cell is="3 tablet-6 phone-6">
			<Avatar src="/img/me.jpg" size={160} />
			</Cell>
			<Cell is="3 tablet-6 phone-6">
			<div>
			<p><a href="https://github.com/arjunkomath"><FontAwesome name='github'/> Github</a></p>
			<p><a href="http://stackoverflow.com/users/1954422/arjun"><FontAwesome name='stack-overflow'/> Stack Overflow</a></p>
			<p><a href="https://twitter.com/arjunz"><FontAwesome name='twitter'/> Twitter</a></p>
			<p><a href="https://github.com/arjunkomath"><FontAwesome name='envelope'/> GMail</a></p>
			</div>
			</Cell>

			</Row>
			</Grid>

			<Grid>
			<Row is="center">
			<Cell is="6 tablet-4 phone-4">
			<Row is="center">
			{this.renderSpecs()}
			</Row>
			</Cell>
			</Row>
			</Grid>

			</div>
			);
	}
}


ReactDOM.render(<App />, document.querySelector('.react-root'));