import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.graduateDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.institution}</h4>
                    <p>{this.props.studyType} in {this.props.area}</p>
                </Cell>
            </Grid>
            )
    }
}

export default Education;