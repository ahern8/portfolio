import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}} className="landing-main">
        <Grid className="landing-grid">
          <Cell col={12}>
              <div className="banner-text">
                <h1>Hi, I'm Alex</h1>
                <hr/>
                <h1>I'm a Full Stack Web Developer</h1>

              </div>
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default Landing;
