import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQH88xEoWfVxmA/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=sYiyrHTej1wqZfrF9_OHqc9r505490TnTNJBQTNNFXE"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr />
                            <p>Azure | C# | Javascript</p>

                            <div className="social-links">
                                {/* LindenIn*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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