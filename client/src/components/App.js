import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './App.css';

class App extends Component {
	render() {
		return <div styleName="app">THIS IS THE CLIENT SIDE</div>;
	}
}

export default CssModules(App, styles);
