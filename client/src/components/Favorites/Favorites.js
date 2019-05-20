import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './Favorites.css';
import FavoriteEntry from './FavoriteEntry/FavoriteEntry';

const Favorites = props => {
	const { favorites, handleFavoriteEvents } = props;
	const favIds = Object.keys(favorites);

	return (
		<div styleName="favorites">
			<h2>Favorites&#40;{favIds.length}&#41;&#58;</h2>
			<section>
				{favIds.map(id => (
					<FavoriteEntry
						key={id}
						entry={favorites[id]}
						handleFavoriteEvents={handleFavoriteEvents}
					/>
				))}
			</section>
		</div>
	);
};

export default CssModules(Favorites, styles);
