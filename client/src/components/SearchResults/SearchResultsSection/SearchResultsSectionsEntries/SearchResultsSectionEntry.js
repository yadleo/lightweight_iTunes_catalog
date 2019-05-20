import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResultsSectionEntry.css';

const SearchResultsSectionEntry = props => {
	const { id, name, artwork, genre, url } = props.entry;
	return (
		<div styleName="section-entry">
			<img styleName="entry-artwork" src={artwork} alt={name} />
			<div styleName="entry-descr">
				<div>
					{name}&nbsp;&ndash;&nbsp;{genre}
				</div>
				<a href={url} target="blank">
					view on iTunes
				</a>
			</div>
		</div>
	);
};

export default CssModules(SearchResultsSectionEntry, styles);
