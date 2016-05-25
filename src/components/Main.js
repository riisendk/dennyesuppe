require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import PresentationComponent from './PresentationComponent';
import Stage1IntroComponent from './Stage1IntroComponent';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.stepForward = this.stepForward.bind(this);
        this.getSteps = this.getSteps.bind(this);
        this.renderSteps = this.renderSteps.bind(this);

        this.state = {
            step: 0
        };
    }
    
    stepForward() {
        const step = this.state.step;
        this.setState({
            step: step + 1
        });
    }

    getSteps() {
        const steps = [
            <PresentationComponent step={this.state.step} stepForward={this.stepForward} />,
            <Stage1IntroComponent step={this.state.step} stepForward={this.stepForward} />
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
                    <h1>Den nye Suppe</h1>
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
