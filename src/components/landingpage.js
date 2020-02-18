import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/proxy/Is5gitrPPywNc0icdeHFb1heYfWORj7exNCwe49aifsnJ9AgGHiBrdzilrzks-MkTeA0yrZs5v4O0eyb-5AJECQfQOW8DXLj8PNQEl99_zlBOoHfoYBC5xz_EIXDevo"
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