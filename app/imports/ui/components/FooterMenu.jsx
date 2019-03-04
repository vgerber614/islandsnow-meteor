import React from 'react';
import { Input, Label, List, Grid} from 'semantic-ui-react';

class FooterMenu extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid container columns="three">
            <Grid.Column>
              NAVIGATION
              <hr/>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              MAIN MENU
              <hr/>
              <List>
                <List.item>Men</List.item>
                <List.item>Woen</List.item>
                <List.item>Kids</List.item>
              </List>
            </Grid.Column>

            <Grid.Column>
              CONNECT
              <hr/>
              <List>
                <List.Item>Sign up for the lastest updates</List.Item>
                <List.Item>
                  <Input placeholder="Enter email address"/>
                  <Label color="black">Join</Label>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
