import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Container } from "semantic-ui-react";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
//import LocationSearch from "./components/LocationSearch";
//import Offers from "./components/Offers";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./container/Home/Home";

class App extends Component {
	render() {
		return (

			<BrowserRouter>
				<Container className="appContainer" fluid style={{ padding: "10px" }}>
					<AppHeader/>
					<Route path="/" exact component={Home} />
					<AppFooter />
				</Container>
			</BrowserRouter>


			// <div>
			// 	<AppHeader />
			// 	<Container className="appContainer" fluid style={{ padding: "10px" }}>
			// 		<Grid style={{marginTop: "2%"}}>
			// 			<Grid.Column width="5"></Grid.Column>
			// 			<Grid.Column width="6">
			// 				<Header size="huge" textAlign="center">Order your food.</Header>
			// 				<LocationSearch />
			// 			</Grid.Column>
			// 			<Grid.Column width="5"></Grid.Column>
			// 		</Grid>
			// 		<div className="homePageOffers">
			// 			<Offers />
			// 		</div>
			// 	</Container>
			// 	<AppFooter />
			// </div>
		);
	}
}

export default App;
