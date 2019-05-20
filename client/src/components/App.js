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
		favorites: [
			{
				id: 700374618,
				name: 'Grown Ups 2',
				artwork:
					'https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/84/d3/11/84d31156-1388-157f-1479-a002f8a791e7/source/100x100bb.jpg',
				genre: 'Comedy',
				url: 'https://itunes.apple.com/us/movie/grown-ups-2/id700374618?uo=4'
			},
			{
				id: 1401705420,
				name: 'Uncle Drew',
				artwork:
					'https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/ff/37/71/ff377148-ecbc-ce45-4e0e-2386dcf236a5/source/100x100bb.jpg',
				genre: 'Comedy',
				url: 'https://itunes.apple.com/us/movie/uncle-drew/id1401705420?uo=4'
			}
		]
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
					<Favorites favorites={this.state.favorites} />
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
