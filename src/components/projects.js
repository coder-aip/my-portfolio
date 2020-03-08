import React, { Component } from 'react';
import { Tabs, Tab, Cell, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        switch (this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Tic Tac Toe</CardTitle>
                            <CardText>Really simple Tic Tac Toe game with React</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/coder-aip/react-tictactoe">GitHub</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >My Portfolio Website</CardTitle>
                            <CardText>Source code of this webpage!!!</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/coder-aip/my-portfolio">GitHub</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
                break;
            case 1:
                return (
                    <div><h1>This is Temp2</h1></div>
                )
                break;
            case 2:
                return (
                    <div><h1>This is Temp3</h1></div>
                )
                break;
            case 3:
                return (
                    <div><h1>This is Temp4</h1></div>
                )
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    {/* <Tab>Temp2</Tab>
                    <Tab>Temp3</Tab>
                    <Tab>Temp4</Tab> */}
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Projects;