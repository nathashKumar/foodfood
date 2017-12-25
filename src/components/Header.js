import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.getActiveMenu(this.props.location.pathname)
        };
    }

    componentWillReceiveProps(nextProp) {
        if (this.props.location.pathname !== nextProp.location.pathname) {
            this.setState({
                activeItem: this.getActiveMenu(nextProp.location.pathname)
            })
        }
    }

    getActiveMenu(path) {
        let menus = this.getMenus();
        let activeMenu = menus.find((el) => {
            return el.path === path;
        });
        return activeMenu.name || "home";
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
            name: "signUp",
            label: "Sign Up",
            icon: "signup",
            path: "/signUp"
        }];
        return menus;
    }

    redirect = (e, { name, data }) => {
        this.setState({ activeItem: name });
        this.props.history.push(data.path);
    }

    render() {

        const { activeItem } = this.state;

        let menus = this.getMenus();

        let menuItems = menus.map((el, index) => {
            return (
                <Menu.Item
                    as="span"
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
//export default Header