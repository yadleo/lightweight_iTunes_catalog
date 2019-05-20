import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './FavoriteEntry.css';

class FavoriteEntry extends Component {
	handleClick = e => {
		this.props.handleFavoriteEvents(this.props.entry, 'DELETE');
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
						view on iTunes
					</a>
				</div>

				<button onClick={this.handleClick}>Unfavorite</button>
			</div>
		);
	}
}

export default CssModules(FavoriteEntry, styles);
