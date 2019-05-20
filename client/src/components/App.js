import React, { Component } from 'react';
import axios from 'axios';
import CssModules from 'react-css-modules';
import styles from './App.css';
import Nav from './Nav/Nav';

class App extends Component {
	state = {
		itunesSearchResult: {}
	};

	getItunesSearchResult = term => {
		axios
			.get(`http://localhost:3000/itunesCatalog/search?term=${term}`)
			.then(res => {
				console.log(res.data);
				this.setState({ itunesSearchResult: res.data });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div styleName="app">
				<Nav getItunesSearchResult={this.getItunesSearchResult} />
				THIS IS THE CLIENT SIDE
				<main />
				<footer>
					<a href="https://icons8.com/icon/63304/itunes">
						iTunes icon by Icons8
					</a>
				</footer>
			</div>
		);
	}
}

export default CssModules(App, styles);
