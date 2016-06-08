'use strict';

import React from 'react';
import { Link } from 'react-router';
var Loading = require('react-loading');

class Stage3SimulatedEuropeComponent extends React.Component {

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
        }, 5000);
    }

    render() {

        const semi1 = this.props.teams.stage3Europe1Simulated;
        const semi2 = this.props.teams.stage3Europe2Simulated;
        const final = this.props.teams.stage3Europe3Simulated;
        const europe = this.props.teams.stage3Europe4Simulated;

        const renderTeams = (teams, europe) => {
            return (
                teams.map((t, i) => {

                    if (europe) {
                        return (
                            <tr key={t.ID}>
                                <td>{t.Name}</td>
                                <td>{t.W + t.D + t.L}</td>
                                <td>{t.W}</td>
                                <td>{t.D}</td>
                                <td>{t.L}</td>
                                <td>{i < 1 ? '√' : ''}</td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr key={t.ID}>
                                <td>{t.Name}</td>
                                <td>{t.W + t.D + t.L}</td>
                                <td>{t.W}</td>
                                <td>{t.D}</td>
                                <td>{t.L}</td>
                            </tr>
                        );
                    }
                })
            );
        };

        if (this.state.simulating) {
            return (
                <div className="step-6 simulating">
                    <h3>Simulerer Europa League-kvalifikationen – vent venligst!</h3>
                    <Loading type='bars' color='#fff' />
                </div>
            );
        }

        return (
            <div className="step-6">
                <h2>Fase 3 - Europa League-kvalifikationen</h2>
                <h3>Semifinaler:</h3>
                <p>De fire hold mødes i to semifinaler over to kampe – det må forventes, at reglen om udebanemål gælder, og at det højst rangerede hold har hjemmebane i den sidste kamp.</p>

                <table className="teams">
                    <thead>
                        <tr>
                            <th>Hold</th>
                            <th>K</th>
                            <th>V</th>
                            <th>U</th>
                            <th>T</th>
                        </tr>
                    </thead>
                    <tbody className="europe">
                        {renderTeams(semi1, false)}
                    </tbody>
                </table>

                <table className="teams">
                    <thead>
                        <tr>
                            <th>Hold</th>
                            <th>K</th>
                            <th>V</th>
                            <th>U</th>
                            <th>T</th>
                        </tr>
                    </thead>
                    <tbody className="europe">
                        {renderTeams(semi2, false)}
                    </tbody>
                </table>

                <h3>Finale:</h3>
                <p>Vinderne af de to semifinaler mødes herefter i et opgør over to kampe. De to tabere af semifinalerne er garanteret en plads i den efterfølgende Superliga-sæson.</p>
                <table className="teams">
                    <thead>
                        <tr>
                            <th>Hold</th>
                            <th>K</th>
                            <th>V</th>
                            <th>U</th>
                            <th>T</th>
                        </tr>
                    </thead>
                    <tbody className="europe">
                        {renderTeams(final, false)}
                    </tbody>
                </table>

                <h3>Kvalifikation til Europa League:</h3>

                <p>Endelig mødes vinderen af finalen tredjepladsen fra mesterskabsspillet i kampen om den tilbageværende europæiske plads. Det tabende hold fra finalen er ligeledes sikret en plads i den efterfølgende Superliga-sæson.</p>

                <table className="teams">
                    <thead>
                        <tr>
                            <th>Hold</th>
                            <th>K</th>
                            <th>V</th>
                            <th>U</th>
                            <th>T</th>
                            <th>Europa</th>
                        </tr>
                    </thead>
                    <tbody className="europe">
                        {renderTeams(europe, true)}
                    </tbody>
                </table>

                <p>Hermed er det afgjort, hvem der vinder guld, sølv og bronze, og hvem, der har kvalificeret sig til de europæiske turneringer. Tilbage er blot af få afgjort, hvem der rykker ned...</p>

                <p className="button">
                    <Link to={'stage3-simulated-relegation'}>Simulér nedrykningsspillet</Link>
                </p>

            </div>
        );
    }
}

Stage3SimulatedEuropeComponent.displayName = 'Stage3SimulatedEuropeComponent';

export default Stage3SimulatedEuropeComponent;
