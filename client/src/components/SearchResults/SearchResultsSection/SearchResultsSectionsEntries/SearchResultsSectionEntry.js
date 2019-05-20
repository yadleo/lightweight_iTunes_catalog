import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResultsSectionEntry.css';

const SearchResultsSectionEntry = props => {
	const { id, name, artwork, genre, url } = props.entry;
	return (
		<div>
			<img src={artwork} alt={name} />
			<h4>This is the name: {name}</h4>
			<h4>This is the genre: {genre}</h4>
			<h4>This is the url: {url}</h4>
		</div>
	);
};

export default CssModules(SearchResultsSectionEntry, styles);
