import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Job from './resume/job';
import Education from './resume/education';
import Skills from './resume/skills';

import avatar from '../images/avatar.png'

import resume from '../data/resume'

class Resume extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img className="avatar-img"
                                src={avatar}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>{resume.basics.name}</h2>
                        <h4 style={{ color: 'grey' }}>{resume.basics.label}</h4>
                        <hr style={{ borderTop: "3px solid #833fb2", width: '50%' }} />
                        {/* <p>{resume.basics.summary}</p>
                        <hr style={{ borderTop: "3px solid #833fb2", width: '50%' }} /> */}
                        <h5>Phone</h5>
                        <p>{resume.basics.phone}</p>
                        <h5>E-mail</h5>
                        <p>{resume.basics.email}</p>
                        <h5>Web</h5>
                        <a href={resume.basics.website}>{resume.basics.website}</a>
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Professional Experience</h2>

                        {resume.work.map((w, i) => {
                            return(
                                <Job
                                company={w.company}
                                position={w.position}
                                startDate={w.startDate}
                                endDate={w.endDate}
                                highlights={w.highlights}
                            />
                            )
                        })}

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Education</h2>
                        <Education
                            graduateDate={resume.education.graduateDate}
                            institution={resume.education.institution}
                            area={resume.education.area}
                            studyType={resume.education.studyType}
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>
                        {resume.skills.map((s, i) => {
                            return <Skills key={i}
                            name={s.name}
                            keywords={s.keywords}
                        />;
                        })}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;