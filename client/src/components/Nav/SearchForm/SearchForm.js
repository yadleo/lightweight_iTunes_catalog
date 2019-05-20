import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchForm.css';

class SearchForm extends Component {
	state = {
		catalogSearchTerms: ''
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.getItunesSearchResult(this.state.catalogSearchTerms);
		e.target.reset();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="catalogSearchTerms">
					<input
						styleName="search-input"
						type="text"
						name="catalogSearchTerms"
						id="catalogSearchTerms"
						// styleName="catalogSearch"
						placeholder="Search iTunes Catalog"
						required
						onChange={this.handleInputChange}
					/>
				</label>
			</form>
		);
	}
}

export default CssModules(SearchForm, styles);
