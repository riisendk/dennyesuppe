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
        }, 7500);
    }

    render() {

        const champs = this.props.teams.stage2ChampsSimulated;
        const rel1 = this.props.teams.stage2Rel1Simulated;
        const rel2 = this.props.teams.stage2Rel2Simulated;

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
                                <td>{t.Points}</td>
                                <td>{i < 2 ? '√' : (i == 2 ? '?' : '')}</td>
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
                                <td>{t.Points}</td>
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
                <h3>Mesterskabsspillet:</h3>
                <p>Efter 10 runder i mesterskabsslutspillet kåres en dansk mester anno 2016/17 – nr. 2 får sølv og nr. 3 får bronze. De øvrige hold sikrer sig endnu en sæson i landets bedste række. Det lavest placerede hold, dvs. tredjepladsen i øjeblikket, som vanligt vil blive tildelt en Europa League-plads, skal vi lige holde in mente til senere.</p>
                <h3>Mesterskabsspillet:</h3>
                <table className="teams">
                    <thead>
                        <tr>
                            <th>Hold</th>
                            <th>K</th>
                            <th>V</th>
                            <th>U</th>
                            <th>T</th>
                            <th>P</th>
                            <th>Europa</th>
                        </tr>
                    </thead>
                    <tbody className="champs">
                        {renderTeams(champs, true)}
                    </tbody>
                </table>
                <p>
                    Efter de seks kampe i kvalifikationsspillet bliver de to puljer delt op nok engang. De to øverste hold i hver pulje klarer frisag i Superligaen, og skal nu spille om Europa League-deltagelse. De to nederste hold i hver pulje skal kæmpe om nedrykning. Det vigtigste at forstå her, er at <strong>der ingen direkte nedrykker er fra Superligaen!</strong> Af de fire hold er det sikkert, at ét hold rykker ned, men det bliver ikke afgjort på dette tidspunkt af turneringen.
                </p>
                <h3>Kvalifikationspulje 1:</h3>
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
                    <tbody className="rel rel-1">
                        {renderTeams(rel1, false)}
                    </tbody>
                </table>
                <h3>Kvalifikationspulje 1:</h3>
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
                    <tbody className="rel rel-2">
                        {renderTeams(rel2, false)}
                    </tbody>
                </table>
                <p>
                    Både Europa League-kvalifikationen og nedrykningsspillet afgøres i en cup-turnering med to semifinaler (ude og hjemme) og en finale, der ligeledes spilles over to kampe. Parringen af modstanderne foregår således, at <span className="rel-top-1">nr. 1 fra den ene pulje</span> møder <span className="rel-top-2">nr. 2 fra den anden pulje</span> og omvendt. Tilsvarende med <span className="rel-bot-1">nr. 3</span> og <span className="rel-bot-2">nr. 4</span> og omvendt. Lad os starte med den positive del – Europa League-kvalifikationen.
                </p>
                <p className="button">
                    <Link to={'stage3-simulated-relegation'}>Simulér nedrykningsspillet</Link>
                </p>

            </div>
        );
    }
}

Stage3SimulatedEuropeComponent.displayName = 'Stage3SimulatedEuropeComponent';

export default Stage3SimulatedEuropeComponent;
