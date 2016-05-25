'use strict';

import React from 'react';

import { stage1Teams, simulate, simulateStage } from '../simulate';

require('styles//Stage1Intro.scss');

class Stage1IntroComponent extends React.Component {
    
    constructor(props) {
        super(props);        
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            teams: stage1Teams
        };
    }
    
    handleClick() {
        this.props.stepForward();
    }
    
    render() {
        const classes = 'step-' + this.props.state;
        const renderTeams = this.state.teams.map((t) => {
            return (
                <li key={t.ID}>{t.Name}</li>
            )            
        });
        return (
            <div className={classes}>
                <h2>Fase 1 - Grundspillet</h2>
                <p>Som nævnt er turneringen to-delt. Da det i 2015/16-sæsonen kun var Hobro, der rykkede ned, og vi samtidig havde tre oprykkere fra 1. division i form af Lyngby, Silkeborg og Horsens, er der nu 14 hold i Superligaen.</p>
                <ul>
                    {renderTeams}
                </ul>
                <p>Disse hold møder, i det vi kalder grundspillet, hinanden ude og hjemme – i alt 26 kampe. Hvordan kampene fordeles på tv-stationerne, og på hvilke kampdage/tidspunkter, ligger ikke fast. Det vides ligeledes heller ikke, hvornår vinterpausen holdes, men det må formodes, at alle 26 runder ikke kan afvikles i efterårssæsonen.</p>
                <p>
                    <button onClick={this.handleClick}>Simulér grundspillet</button>
                </p>
            </div>
        );
    }
}

Stage1IntroComponent.displayName = 'Stage1IntroComponent';

// Uncomment properties you need
// Stage1IntroComponent.propTypes = {};
// Stage1IntroComponent.defaultProps = {};

export default Stage1IntroComponent;
