import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import LocationSearch from "../../../components/LocationSearch";

class MainSearch extends Component {

	render() {
		return (
			<div>
				<Header size="medium" textAlign="center" className="font-white">
					<Icon name="food" />
                    Order your food.
				</Header>
				<LocationSearch />
			</div>
		);
	}

}

export default MainSearch;