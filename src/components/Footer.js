import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";

class Footer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Menu stackable fixed="bottom" inverted pointing>
				<Menu.Item>
					Copy
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item
						name="home"
						onClick={this.clicked}
					/>
					<Menu.Item
						name="login"
						onClick={this.clicked}
					/>
					<Menu.Item
						name="createAccount"
						onClick={this.clicked}
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Footer;
