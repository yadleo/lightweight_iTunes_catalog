import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './SearchForm.css';

class SearchForm extends Component {
	state = {
		catalogSearchTerms: ''
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state.catalogSearchTerms);
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log('handleSubmit', this.state.catalogSearchTerms);
		this.props.getItunesSearchResult(this.state.catalogSearchTerms);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="catalogSearchTerms">
					<input
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
