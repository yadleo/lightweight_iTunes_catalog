import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './Favorites.css';
import FavoriteEntry from './FavoriteEntry/FavoriteEntry';

const Favorites = props => {
	const favorites = props.favorites;
	return (
		<div styleName="favorites">
			<h2>Favorites&#40;{favorites.length}&#41;&#58;</h2>
			<section>
				{favorites.map(entry => (
					<FavoriteEntry key={entry.id} entry={entry} />
				))}
			</section>
		</div>
	);
};

export default CssModules(Favorites, styles);
