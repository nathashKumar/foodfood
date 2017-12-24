import React, { Component } from "react";
import { Image, Menu, Icon } from "semantic-ui-react";
import logo from "../images/logo_grey.png";
import { withRouter } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: "home"
        };
    }

    getMenus = () => {
        let menus = [{
            name: "home",
            label: "Home",
            icon: "home",
            path: "/"
        }, {
            name: "login",
            label: "Login",
            icon: "sign in",
            path: "/login"
        }, {
            name: "createAccount",
            label: "Create Account",
            icon: "signup",
            path: "/createAccount"
        }];
        return menus;
    }

    redirect = (e, {name, data}) => {
        this.setState({ activeItem: name });
        this.props.history.push(data.path);
    }

    render() {

        const { activeItem } = this.state;

        let menus = this.getMenus();

        let menuItems = menus.map((el, index) => {
            return (
                <Menu.Item
                    key={index}
                    data={el}
                    name={el.name}
                    active={activeItem === el.name}
                    onClick={this.redirect}>
                    <Icon
                        name={el.icon}
                        size="large"
                    />
                    {el.label}
                </Menu.Item>
            )
        });

        return (
            <Menu
                stackable
                fixed="top"
                inverted
                color={'orange'}
                pointing
                borderless={false}
                size="huge">
                <Menu.Item header={true} style={{ fontSize: "25px", }}>
                    {/* <Image src={logo} alt="Logo" size='mini' /> */}
                    FoodFood
                </Menu.Item>
                <Menu.Menu position='right'>
                    {menuItems}
                </Menu.Menu>
            </Menu>
        );
    }

}

export default withRouter(Header);