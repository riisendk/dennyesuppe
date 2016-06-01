'use strict';

import React from 'react';

class Stage1IntroComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.stepForward();
    }
    
    render() {
        const classes = 'step-' + this.props.step;
        const renderTeams = this.props.teams.map((t) => {
            return (
                <li className={t.className} key={t.ID}>{t.Name}</li>
            )    
        });
        return (
            <div className={classes}>
                <h2>Fase 1 - Grundspillet</h2>
                <p>Som nævnt er turneringen to-delt. Da det i 2015/16-sæsonen kun var Hobro, der rykkede ned, og vi samtidig havde tre oprykkere fra 1. division i form af Lyngby, Silkeborg og Horsens, er der nu 14 hold i Superligaen.</p>
                <ul className="teams">
                    {renderTeams}
                </ul>
                <p>Disse hold møder, i det vi kalder grundspillet, hinanden ude og hjemme – i alt 26 kampe. Hvordan kampene fordeles på tv-stationerne, og på hvilke kampdage/tidspunkter, ligger ikke endeligt fast. Der holdes vinterpause efter runde 21 i starten af december 2016.</p>
                <p>
                    <button onClick={this.handleClick}>Simulér grundspillet</button>
                </p>
            </div>
        );
    }
}

Stage1IntroComponent.displayName = 'Stage1IntroComponent';

export default Stage1IntroComponent;
