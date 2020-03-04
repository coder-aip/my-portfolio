import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col={2}>
                    <div style={{display: "flex"}}>{this.props.name}</div>
                </Cell>
                <Cell col={10}>
                    <div style={{display: "flex"}}>
                    {this.props.keywords.map((k, i) => {
                            return <li key={ i }>{k}</li>;
                        })}
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;