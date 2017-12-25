import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import AppLayout from "./container/Layout/Layout";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<AppLayout/>
			</BrowserRouter>
		);
	}
}

export default App;
