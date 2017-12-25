import React from "react";
import { Grid, Header, Label, Icon } from "semantic-ui-react";

const PopularStates = (props) => {
    const labels = [1, 3, 4].map((el, index) => {
        return <Label size="large" key={index}>Karnataka</Label>;
    });
    return (
        <Grid columns="1">
            <Grid.Column>
                <Header as="h3" color="orange">
                    <Icon name="location arrow"/>
                    Popular States
                </Header>                
                <Label.Group>
                    {labels}
                </Label.Group>
            </Grid.Column>
        </Grid>
    );
};

export default PopularStates;