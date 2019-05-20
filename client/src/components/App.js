import React, { Component } from 'react';
import axios from 'axios';
import CssModules from 'react-css-modules';
import styles from './App.css';
import Nav from './Nav/Nav';
import SearchResults from './SearchResults/SearchResults';
import Favorites from './Favorites/Favorites';

class App extends Component {
	state = {
		itunesSearchResult: {},
		favorites: {}
	};

	getItunesSearchResult = term => {
		axios
			.get(`http://localhost:3000/itunesCatalog/search?term=${term}`)
			.then(res => {
				this.setState({ itunesSearchResult: res.data });
			})
			.catch(err => window.alert(err));
	};

	handleFavoriteEvents = (entry, action) => {
		if (action === 'ADD') {
			const favorited = this.state.favorites[entry.id];
			if (!favorited) {
				const favorites = { ...this.state.favorites };
				favorites[entry.id] = entry;
				this.setState({ favorites });
			}
		} else if (action === 'DELETE') {
			const favorites = { ...this.state.favorites };
			delete favorites[entry.id];
			this.setState({ favorites });
		}
	};

	render() {
		return (
			<div styleName="app">
				<Nav getItunesSearchResult={this.getItunesSearchResult} />
				<main>
					<SearchResults
						itunesSearchResult={this.state.itunesSearchResult}
						handleFavoriteEvents={this.handleFavoriteEvents}
					/>
					<Favorites
						favorites={this.state.favorites}
						handleFavoriteEvents={this.handleFavoriteEvents}
					/>
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
