import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Footer extends Component {

	render() {
		return (
			<Menu stackable fixed="bottom" inverted pointing>
				<Menu.Item>
					&copy; 2018, FoodFood
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item
						name="Developed by Nathash"
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Footer;
