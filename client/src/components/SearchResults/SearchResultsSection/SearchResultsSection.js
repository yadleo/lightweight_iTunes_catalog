import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResultsSection.css';
import SearchResultsSectionEntry from './SearchResultsSectionsEntries/SearchResultsSectionEntry';

const SearchResultsSection = props => {
	return (
		<div>
			<h3>{props.section}&#58;</h3>
			{props.entries.map(entry => (
				<SearchResultsSectionEntry key={entry.id} entry={entry} />
			))}
		</div>
	);
};

export default CssModules(SearchResultsSection, styles);
