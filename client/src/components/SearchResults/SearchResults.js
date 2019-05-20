import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResults.css';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection';

const SearchResults = props => {
	const itunesSearchResult = props.itunesSearchResult;
	let sections = Object.keys(itunesSearchResult);

	return (
		<div>
			<h2>Search Results by Media Type&#58;</h2>
			{sections.map((section, idx) => (
				<SearchResultsSection
					key={idx}
					section={section}
					entries={itunesSearchResult[section]}
				/>
			))}
		</div>
	);
};

export default CssModules(SearchResults, styles);
