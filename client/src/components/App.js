import React, { Component } from 'react';
import axios from 'axios';
import CssModules from 'react-css-modules';
import styles from './App.css';
import Nav from './Nav/Nav';
import SearchResults from './SearchResults/SearchResults';

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
			.catch(err => window.alert(err));
	};

	render() {
		return (
			<div styleName="app">
				<Nav getItunesSearchResult={this.getItunesSearchResult} />
				<main>
					<SearchResults itunesSearchResult={this.state.itunesSearchResult} />
				</main>
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
