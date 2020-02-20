import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import avatar from '../images/avatar.png'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr />
                            <p>Azure | C# | Javascript</p>

                            <div className="social-links">
                                {/* LindenIn*/}
                                <a href="https://www.linkedin.com/in/alexandre-ip/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github*/}
                                <a href="https://github.com/coder-aip" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;