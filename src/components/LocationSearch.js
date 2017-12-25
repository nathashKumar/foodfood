import React, { Component } from "react";
import { Grid, Segment, Search } from "semantic-ui-react";
var axios = require('axios');

class LocationSearch extends Component {

	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);

		this.state = {
			"isLoading": false,
			"results": [],
			"value": ""
		};
	}

	componentDidMount() {
		console.log("here");
	}

	resultSelect(e, data) {
		console.log(data);
	}

	handleSearch(e, { value }) {
		axios.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				var list = response.data || [];

				this.setState({
					results: list.map(function (v) {
						return {
							title: v.title,
							_raw: v
						};
					})
				});
			})
			.catch((error) => {
				this.setState({
					results: []
				});
			});
	}

	render() {
		return (
			<Segment stacked>
				<Grid>
					<Grid.Column>						
						<Search
							className="appLocationSearch"
							results={this.state.results}
							onSearchChange={this.handleSearch}
							onResultSelect={this.resultSelect}
							fluid
							resultRenderer={({ title }) => (<small>{title}</small>)}
							placeholder="Enter a location"
						/>
					</Grid.Column>
				</Grid>
			</Segment>
		);
	}
}

export default LocationSearch;