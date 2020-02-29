import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Job extends Component {
    render() {
        return (
            <Grid>
                <Cell cell={4}>
                    <p>{this.props.start} - {this.props.end}</p>
                </Cell>
                <Cell cell={4}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.company}</h4>
                    <p>{this.props.jobTitle}</p>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Job;