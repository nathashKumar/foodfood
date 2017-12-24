import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MainSearch from "../Home/MainSearch/MainSearch";
import MainOffers from "../Home/MainOffers/MainOffers";


class Home extends Component {

	render() {
		return (
			<div>
				<Grid style={{ marginTop: "2%" }}>
					<Grid.Column width="5"></Grid.Column>
					<Grid.Column width="6">
						<MainSearch />
					</Grid.Column>
					<Grid.Column width="5"></Grid.Column>
				</Grid>
				<Grid columns="1">
					<Grid.Column>
						<MainOffers />
					</Grid.Column>
				</Grid>
			</div >
		);
	}

}

export default Home;