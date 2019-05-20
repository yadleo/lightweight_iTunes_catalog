import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResults.css';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection';

const SearchResults = props => {
	const { itunesSearchResult, handleFavoriteEvents } = props;
	let sections = Object.keys(itunesSearchResult);

	return (
		<div styleName="searchResults">
			<h2>Search Results&#58;</h2>
			{sections.map((section, idx) => (
				<SearchResultsSection
					key={idx}
					section={section}
					entries={itunesSearchResult[section]}
					handleFavoriteEvents={handleFavoriteEvents}
				/>
			))}
		</div>
	);
};

export default CssModules(SearchResults, styles);
