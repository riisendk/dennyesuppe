'use strict';

import React from 'react';
import { Link } from 'react-router';
var Loading = require('react-loading');

class Stage1SimulatedComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            simulating: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                simulating: false
            });
        }, 7500);
    }

    render() {
        const renderTeams = this.props.teams.stage1Simulated.map((t) => {
            return (
                <tr key={t.ID}>
                    <td>{t.Name}</td>
                    <td>{t.W + t.D + t.L}</td>
                    <td>{t.W}</td>
                    <td>{t.D}</td>
                    <td>{t.L}</td>
                    <td>{t.Points}</td>
                </tr>
            )
        });
        
        if (this.state.simulating) {
            return (
                <div className="step-3 simulating">
                    <h3>Simulerer grundspillet – vent venligst!</h3>
                    <Loading type='bars' color='#fff' />
                </div>
            );
        }
        
        return (
            <div className="step-3">
                <h2>Fase 1 - Grundspillet</h2>
                <p>Et færdigspillet grundspil kunne se ud som følger. Alle hold har mødt hinanden to gange, og pointene er uddelt, som vi kender det.</p>
                <table className="teams">
                    <thead>
                        <tr>
                            <th>Hold</th>
                            <th>K</th>
                            <th>V</th>
                            <th>U</th>
                            <th>T</th>
                            <th>P</th>
                        </tr>
                    </thead>
                    <tbody className="stage-1">
                        {renderTeams}
                    </tbody>
                </table>
                <p>De <span className="top-6">seks øverste</span> hold kvalificerer sig til mesterskabsslutspillet, mens de nederste otte hold fordeles i to kvalifikationspuljer: <span className="bottom-8-1">nr. 7, 10, 11 og 14</span> i den ene gruppe, og <span className="bottom-8-2">nr. 8, 9, 12 og 13</span> i den anden gruppe.</p>
                <p className="button">
                    <Link to={'stage2-intro'}>Ok, det er jo til at forstå - vis mig slutspillet!</Link>
                </p>
            </div>
        );
    }
}

Stage1SimulatedComponent.displayName = 'Stage1SimulatedComponent';

export default Stage1SimulatedComponent;
