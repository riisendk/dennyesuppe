require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import PresentationComponent from './PresentationComponent';
import Stage1IntroComponent from './Stage1IntroComponent';
import Stage1SimulatedComponent from './Stage1SimulatedComponent';
import Stage2IntroComponent from './Stage2IntroComponent';
import Stage2SimulatedComponent from './Stage2SimulatedComponent';

import { stage1Teams } from '../simulate';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.setTeams = this.setTeams.bind(this);
        this.stepForward = this.stepForward.bind(this);
        this.getSteps = this.getSteps.bind(this);
        this.renderSteps = this.renderSteps.bind(this);

        this.state = {
            step: 0,
            teams: stage1Teams
        };
    }
    
    setTeams(teams) {
        this.setState({
            teams
        });
    }
    
    stepForward() {
        const step = this.state.step;
        this.setState({
            step: step + 1
        });
    }

    getSteps() {
        const steps = [
            <PresentationComponent step={this.state.step} stepForward={this.stepForward} teams={this.state.teams} setTeams={this.setTeams} />,
            <Stage1IntroComponent step={this.state.step} stepForward={this.stepForward} teams={this.state.teams} setTeams={this.setTeams} />,
            <Stage1SimulatedComponent step={this.state.step} stepForward={this.stepForward} teams={this.state.teams} setTeams={this.setTeams} />,
            <Stage2IntroComponent step={this.state.step} stepForward={this.stepForward} teams={this.state.teams} setTeams={this.setTeams} />,
            <Stage2SimulatedComponent step={this.state.step} stepForward={this.stepForward} teams={this.state.teams} setTeams={this.setTeams} />
        ];
        
        return steps;
    }

    renderSteps() {
        return (
            <div>
                {this.getSteps()[this.state.step]}
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Den nye Suppe.dk</h1>
                    <p>Forstå den nye ligastruktur i Superligaen</p>
                </header>
                <div className="steps">
                    {this.renderSteps()}
                </div>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
