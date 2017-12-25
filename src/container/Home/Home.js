import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import MainSearch from "../Home/MainSearch/MainSearch";
import MainOffers from "../Home/MainOffers/MainOffers";
import PopularStates from "../Home/PopularStates/PopularStates";


class Home extends Component {

	render() {
		return (
			<div>
				<Grid textAlign="center">
					<Grid.Column style={{ maxWidth: "600px" }}>
						<MainSearch />
					</Grid.Column>					
				</Grid>
				<Grid columns="1">
					<Grid.Column>
						<Segment>
							<PopularStates />		
						</Segment>
						<Segment>
							<MainOffers />						
						</Segment>
					</Grid.Column>
				</Grid>
			</div >
		);
	}

}

export default Home;