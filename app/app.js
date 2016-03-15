import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import Avatar from 'material-ui/lib/avatar';
import { Grid, Row, Cell } from 'react-inline-grid';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import FontAwesome from 'react-fontawesome';

import data from './data.js';

class Specs extends React.Component {

	renderFeat() {
		var rows = []; 
		for (var key in this.props.feat) {
			rows.push(<ListItem key={key} primaryText={this.props.feat[key]} leftIcon={<ActionGrade />}/>);
		} 
		return rows;
	}

	render() {
		return (
			<Cell is="6 tablet-6 phone-6">
			<div>
			<List subheader={this.props.title}>
			{this.renderFeat()}
			</List>
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
			rows.push(<Specs key={key} title={item.title} feat={item.feat} />)
		} 
		return rows;
	}

	render() {
		return (
			<div>

			<Grid>
			<Row is="center">

			<Cell is="2 tablet-4 phone-4">
			<div><Avatar src="/img/me.jpg" size={200} /></div>
			</Cell>

			<Cell is="4 tablet-4 phone-4">
			<div>
			<h2><FontAwesome name='terminal'/> Arjun Komath</h2>
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