'use strict';

import React from 'react';

import { simulateStage, reset } from '../simulate';

class Stage2SimulatedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        const teams = this.props.teams;
        this.state = {
            teams: {
                champs: simulateStage(teams.slice(0, 6)),
                rel1: simulateStage([
                    teams[6], 
                    teams[9], 
                    teams[10], 
                    teams[13]
                    ]),
                rel2: simulateStage([
                    teams[7], 
                    teams[8], 
                    teams[11], 
                    teams[12]
                    ])
            }
        };
    }
    
    handleClick() {
        this.props.stepForward();
    }    
    
    render() {
        const classes = 'step-' + this.props.step;
        
        const champs = this.state.teams.champs;
        const rel1 = this.state.teams.rel1;
        const rel2 = this.state.teams.rel2;
        
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
        
        return (
            <div className={classes}>
                <h2>Fase 2 - Slutspillet</h2>
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
                    <button onClick={this.handleClick}>Simulér slutspillet</button>
                </p>
                
            </div>
        );
    }
}

Stage2SimulatedComponent.displayName = 'Stage2SimulatedComponent';

export default Stage2SimulatedComponent;
