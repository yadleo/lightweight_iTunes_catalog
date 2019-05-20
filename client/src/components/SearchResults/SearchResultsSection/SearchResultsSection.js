import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResultsSection.css';
import SearchResultsSectionEntry from './SearchResultsSectionsEntries/SearchResultsSectionEntry';

const SearchResultsSection = props => {
	return (
		<React.Fragment>
			<h3 styleName="mediatype">{props.section}&#58;</h3>
			<div styleName="mediatype-section">
				{props.entries.map(entry => (
					<SearchResultsSectionEntry key={entry.id} entry={entry} />
				))}
			</div>
		</React.Fragment>
	);
};

export default CssModules(SearchResultsSection, styles);
