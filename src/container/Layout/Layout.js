import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import AppHeader from "../../components/Header";
import AppFooter from "../../components/Footer";

import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


const AppLayout = (props) => {

    return (
        <Container className="appContainer" fluid style={{ padding: "10px" }}>
            <AppHeader />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signUp" exact component={SignUp} />
            <AppFooter />
        </Container>
    );

};

export default AppLayout;