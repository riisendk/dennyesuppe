'use strict';

import React from 'react';
import { Link } from 'react-router';
var Loading = require('react-loading');

class Stage3SimulatedRelegationComponent extends React.Component {

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

        const semi1 = this.props.teams.stage3Rel1Simulated;
        const semi2 = this.props.teams.stage3Rel2Simulated;
        const winner = this.props.teams.stage3Rel3Simulated;
        const loser = this.props.teams.stage3Rel4Simulated;
        const firstDiv3 = this.props.teams.stage3Rel5Simulated;
        const firstDiv2 = this.props.teams.stage3Rel6Simulated;

        const renderTeams = (teams) => {
            return (
                teams.map((t) => {
                    return (
                        <tr key={t.ID}>
                            <td>{t.Name}</td>
                            <td>{t.W + t.D + t.L}</td>
                            <td>{t.W}</td>
                            <td>{t.D}</td>
                            <td>{t.L}</td>
                        </tr>
                    );
                })
            );
        };

        if (this.state.simulating) {
            return (
                <div className="step-7 simulating">
                    <h3>Simulerer nedrykningsspillet – vent venligst!</h3>
                    <Loading type='bars' color='#fff' />
                </div>
            );
        }

        return (
            <div className="step-6">
                <h2>Fase 3 - Nedrykningsspillet</h2>
                <h3>Semifinaler:</h3>
                <p>Også i nedrykningsspillet mødes de fire hold i to semifinaler over to kampe – igen må det forventes, at reglen om udebanemål gælder, og at det højst rangerede hold har hjemmebane i den sidste kamp.</p>

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
                    <tbody className="rel-cup">
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
                    <tbody className="rel-cup">
                        {renderTeams(semi2, false)}
                    </tbody>
                </table>

                <h3>Vinderfinale:</h3>
                <p>Vinderne af de to semifinaler mødes herefter i et opgør over to kampe. Vinderen af dette opgør sikrer sig overlevelse i Superligaen, mens taberen fortsat må holde spændingen ud.</p>
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
                    <tbody className="rel-cup">
                        {renderTeams(winner, false)}
                    </tbody>
                </table>

                <h3>Taberfinale:</h3>

                <p>De to tabere af semifinalerne mødes i det ultimative nedrykkeropgør – taberen ryger direkte i 1. division, mens vinderen får endnu en chance for overlevelse.</p>

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
                    <tbody className="rel-cup">
                        {renderTeams(loser, true)}
                    </tbody>
                </table>

                <p>I 1. division har følgende hold placeret sig på de tre øverste pladser: {this.props.teams.firstDiv[0].Name}, {this.props.teams.firstDiv[1].Name} og {this.props.teams.firstDiv[2].Name}. Her rykker førstnævnte direkte op, mens de to øvrige skal spille kvalifikation mod de to tilbageværende Superligahold.</p>

                <h3>Kvalifikationskamp mellem taberen af vinderfinalen og nr. 3 fra 1. division</h3>

                <p>Taberen af vinderfinalen møder det dårligst placerede hold fra 1. division – vinderen får en plads i Superligaen og taberen rykker ned (eller forbliver nede) i 1. division.</p>

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
                    <tbody className="rel-cup">
                        {renderTeams(firstDiv3, true)}
                    </tbody>
                </table>

                <h3>Kvalifikationskamp mellem vinderen af taberfinalen og nr. 2 fra 1. division</h3>

                <p>Vinderen af taberfinalen får fornøjelsen af det højst placerede hold fra 1. division i en direkte duel om en plads i Superligaen.</p>

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
                    <tbody className="rel-cup">
                        {renderTeams(firstDiv2, true)}
                    </tbody>
                </table>

                <p>Så i ovenstående scenarier er {this.props.teams.stage3Rel4Simulated[1].Name} rykket direkte ned, mens {this.props.teams.stage3Rel5Simulated[1].Name} og {this.props.teams.stage3Rel6Simulated[1].Name} som tabere af de to kvalifikationsopgør også får plads i 1. division i den efterfølgende sæson.</p>

                <p className="button">
                    <Link to={'faq'}>Opsummering og ofte stillede spørgsmål</Link>
                </p>

            </div>
        );
    }
}

Stage3SimulatedRelegationComponent.displayName = 'Stage3SimulatedRelegationComponent';

export default Stage3SimulatedRelegationComponent;
