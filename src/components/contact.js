import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Default from './Default.JPG';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alex Hernandez</h2>
            <img
              src={Default}
              alt="default"
              style={{height: '250px', borderRadius: '5px'}}
            />

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"> </i>
                  (480) 277-9161
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"> </i>
                  Alex@TheWorkofAlex.com
                </ListItemContent>
              </ListItem>

            </List>
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }

}

export default Contact;
