'use strict';

import React from 'react';
import { Link } from 'react-router';

class Stage2IntroComponent extends React.Component {

    render() {
        const teams = this.props.teams.stage1Reset;
        const bot8_1 = [teams[6], teams[9], teams[10], teams[13]];
        const bot8_2 = [teams[7], teams[8], teams[11], teams[12]];

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
                            <td>{t.Points}</td>
                        </tr>
                    );
                })
            );
        };

        return (
            <div className="step-4">
                <h2>Fase 2 - Slutspillet</h2>
                <p>Det vigtigste at bemærke sig i forbindelse med slutspillet er, at ALLE point tages med over. Der foregår altså hverken en nulstilling eller en halvering af pointtallet fra grundspillet. Det vil sige, at de tre 'grupper' (mesterskabsslutspillet og de to kvalifikationspuljer) tager deres udgangspunkt som følger.</p>
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
                        </tr>
                    </thead>
                    <tbody>
                        {renderTeams(teams.slice(0, 6))}
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
                    <tbody>
                        {renderTeams(bot8_1)}
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
                    <tbody>
                        {renderTeams(bot8_2)}
                    </tbody>
                </table>
                <p>
                    I slutspillet mødes alle hold også to gange – ude og hjemme – dvs. der spilles 10 kampe i mesterskabs&shy;slutspillet og seks kampe i de to kvalifikationspuljer.
                </p>
                <p className="button">
                    <Link to={'stage2-simulated'}>Simulér slutspillet</Link>
                </p>

            </div>
        );
    }
}

Stage2IntroComponent.displayName = 'Stage2IntroComponent';

export default Stage2IntroComponent;
