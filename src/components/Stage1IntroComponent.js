'use strict';

import React from 'react';
import { Link } from 'react-router';

class Stage1IntroComponent extends React.Component {

    render() {
        const renderTeams = this.props.teams.stage1Init.map((t) => {
            return (
                <li className={t.className} key={t.ID}>{t.Name}</li>
            );
        });
        return (
            <div className="step-2">
                <h2>Fase 1 - Grundspillet</h2>
                <p>Som nævnt er turneringen to-delt. Efter 2016/17-sæsonen rykkede Hobro og Helsingør op fra 1. division.</p>
                <ul className="teams">
                    {renderTeams}
                </ul>
                <p>Disse hold møder, i det vi kalder grundspillet, hinanden ude og hjemme – i alt 26 kampe. Sidste runde af grundspillet i 2017/18-sæsonen blev afviklet søndag d. 18. marts 2018.</p>
                <p className="button">
                    <Link to={'stage1-simulated'}>Vis resultatet af grundspillet</Link>
                </p>
            </div>
        );
    }
}

Stage1IntroComponent.displayName = 'Stage1IntroComponent';

export default Stage1IntroComponent;
