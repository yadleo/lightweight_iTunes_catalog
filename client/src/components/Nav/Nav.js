import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './Nav.css';
import SearchForm from './SearchForm/SearchForm';

class Nav extends Component {
	render() {
		return (
			<nav styleName="navigation">
				<img src="https://img.icons8.com/color/48/000000/itunes.png" />
				<SearchForm getItunesSearchResult={this.props.getItunesSearchResult} />
			</nav>
		);
	}
}

export default CssModules(Nav, styles);
