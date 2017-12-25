import React, { Component } from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";

class Offers extends Component {
	
	render() {

		let src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGi6oyhuO7tal0im7kCzXwLEhWE9J4tVN2psYZZwsPBhLgg6f";

		return (
			<Grid columns={1}>
				<Grid.Column>
					<Header as="h3" color="orange">
						<Icon name='tags'/>
						Offers
					</Header>
					
					<Image.Group size='medium'>
						<Image src={src} />
						<Image src={src} />
						<Image src={src} />
						<Image src={src} />
					</Image.Group>					
				</Grid.Column>
			</Grid>
		);
	}

}

export default Offers;