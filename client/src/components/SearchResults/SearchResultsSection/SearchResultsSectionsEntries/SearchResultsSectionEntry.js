import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchResultsSectionEntry.css';

class SearchResultsSectionEntry extends Component {
	handleClick = e => {
		console.log('fav');
		this.props.handleFavoriteEvents(this.props.entry, 'ADD');
	};
	render() {
		const { id, name, artwork, genre, url } = this.props.entry;
		return (
			<div styleName="section-entry">
				<img styleName="entry-artwork" src={artwork} alt={name} />
				<div styleName="entry-descr">
					<div>
						{name}&nbsp;&ndash;&nbsp;{genre}
					</div>
					<a href={url} target="blank">
						View on iTunes
					</a>
				</div>
				<button onClick={this.handleClick}>Favorite</button>
			</div>
		);
	}
}

export default CssModules(SearchResultsSectionEntry, styles);
