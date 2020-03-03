import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Job extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.company}</h4>
                    <p>{this.props.position}</p>
                    <ul>
                        {this.props.highlights.map((h, i) => {
                            return <li key={ i }>{h}</li>;
                        })}
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Job;