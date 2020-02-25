import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: "center"}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Alexandre Ip</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop:"3px solid #833fb2", width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <hr style={{borderTop:"3px solid #833fb2", width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>(512) 905-1042</p>
                        <h5>E-mail</h5>
                        <p>alex20xx_zala@hotmail.com</p>
                        <h5>Web</h5>
                        <p>https://coder-aip.github.io/my-portfolio/</p>
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName={"The University Of Texas At Austin"}
                            schoolDesc={"Longhorns"}
                            />
                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName={"The University Of Texas At Austin"}
                            schoolDesc={"Longhorns"}
                            />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill={"C#"}
                            skillLevel={80}
                            />
                        <Skills
                            skill={"SQL"}
                            skillLevel={80}
                            />
                        <Skills
                            skill={"Azure"}
                            skillLevel={80}
                            />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;