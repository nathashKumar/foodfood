import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import LocationSearch from "../../../components/LocationSearch";

class MainSearch extends Component {

	render() {
		return (
			<div>
				<Header size="large" textAlign="center" className="font-white" color="orange">
					<Icon name="food" />
                    Order your food.
				</Header>
				<LocationSearch />
			</div>
		);
	}

}

export default MainSearch;