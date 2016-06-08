require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import { stage1Teams, firstDiv, simulateStage, reset } from '../simulate';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.setTeams = this.setTeams.bind(this);
        this.simulateEverything = this.simulateEverything.bind(this);

        this.state = {
            teams: {
                firstDiv: [],
                stage1Init: [],
                stage1Simulated: [],
                stage1Reset: [],
                stage2Champs: [],
                stage2ChampsSimulated: [],
                stage2ChampsReset: [],
                stage2Rel1: [],
                stage2Rel2: [],
                stage2Rel1Simulated: [],
                stage2Rel2Simulated: [],
                stage2Rel1Reset: [],
                stage2Rel2Reset: [],
                stage3Europe1: [],
                stage3Europe2: [],
                stage3Europe1Simulated: [],
                stage3Europe2Simulated: [],
                stage3Europe1Reset: [],
                stage3Europe2Reset: [],
                stage3Europe3: [],
                stage3Europe3Simulated: [],
                stage3Europe3Reset: [],
                stage3Europe4: [],
                stage3Europe4Simulated: [],
                stage3Rel1: [],
                stage3Rel2: [],
                stage3Rel1Simulated: [],
                stage3Rel2Simulated: [],
                stage3Rel1Reset: [],
                stage3Rel2Reset: [],
                stage3Rel3: [],
                stage3Rel3Simulated: [],
                stage3Rel3Reset: [],
                stage3Rel4: [],
                stage3Rel4Simulated: [],
                stage3Rel4Reset: [],
                stage3Rel5: [],
                stage3Rel5Simulated: [],
                stage3Rel6: [],
                stage3Rel6Simulated: []
            }
        };
    }

    setTeams(teams) {
        this.setState({
            teams
        });
    }

    simulateEverything() {
        let teams = this.state.teams;

        teams.firstDiv = firstDiv;
        teams.stage1Init = stage1Teams;

        teams.stage1Simulated = simulateStage(teams.stage1Init);
        teams.stage1Reset = reset(teams.stage1Simulated, true);

        teams.stage2Champs = teams.stage1Reset.slice(0, 6);
        teams.stage2ChampsSimulated = simulateStage(teams.stage2Champs);
        teams.stage2ChampsReset = reset(teams.stage2ChampsSimulated);

        teams.stage2Rel1 = [
            teams.stage1Reset[6],
            teams.stage1Reset[9],
            teams.stage1Reset[10],
            teams.stage1Reset[13]
        ];

        teams.stage2Rel2 = [
            teams.stage1Reset[7],
            teams.stage1Reset[8],
            teams.stage1Reset[11],
            teams.stage1Reset[12]
        ];

        teams.stage2Rel1Simulated = simulateStage(teams.stage2Rel1);
        teams.stage2Rel2Simulated = simulateStage(teams.stage2Rel2);
        teams.stage2Rel1Reset = reset(teams.stage2Rel1Simulated, false);
        teams.stage2Rel2Reset = reset(teams.stage2Rel2Simulated, false);

        teams.stage3Europe1 = [
            teams.stage2Rel1Reset[0],
            teams.stage2Rel2Reset[1]
        ];

        teams.stage3Europe2 = [
            teams.stage2Rel1Reset[1],
            teams.stage2Rel2Reset[0]
        ];

        teams.stage3Europe1Simulated = simulateStage(teams.stage3Europe1);
        teams.stage3Europe2Simulated = simulateStage(teams.stage3Europe2);

        teams.stage3Europe1Reset = reset(teams.stage3Europe1Simulated, false);
        teams.stage3Europe2Reset = reset(teams.stage3Europe2Simulated, false);

        teams.stage3Europe3 = [
            teams.stage3Europe1Reset[0],
            teams.stage3Europe2Reset[0]
        ];

        teams.stage3Europe3Simulated = simulateStage(teams.stage3Europe3);
        teams.stage3Europe3Reset = reset(teams.stage3Europe3Simulated, false);

        teams.stage3Europe4 = [
            teams.stage2ChampsReset[2],
            teams.stage3Europe3Reset[0]
        ];

        teams.stage3Europe4Simulated = simulateStage(teams.stage3Europe4);

        teams.stage3Rel1 = [
            teams.stage2Rel1Reset[2],
            teams.stage2Rel2Reset[3]
        ];

        teams.stage3Rel2 = [
            teams.stage2Rel1Reset[3],
            teams.stage2Rel2Reset[2]
        ];

        teams.stage3Rel1Simulated = simulateStage(teams.stage3Rel1);
        teams.stage3Rel2Simulated = simulateStage(teams.stage3Rel2);

        teams.stage3Rel1Reset = reset(teams.stage3Rel1Simulated, false);
        teams.stage3Rel2Reset = reset(teams.stage3Rel2Simulated, false);

        teams.stage3Rel3 = [
            teams.stage3Rel1Reset[0],
            teams.stage3Rel2Reset[0]
        ];

        teams.stage3Rel4 = [
            teams.stage3Rel1Reset[1],
            teams.stage3Rel2Reset[1]
        ];

        teams.stage3Rel3Simulated = simulateStage(teams.stage3Rel3);
        teams.stage3Rel4Simulated = simulateStage(teams.stage3Rel4);

        teams.stage3Rel3Reset = reset(teams.stage3Rel3Simulated, false);
        teams.stage3Rel4Reset = reset(teams.stage3Rel4Simulated, false);

        teams.stage3Rel5 = [
            teams.stage3Rel3Reset[1],
            firstDiv[2]
        ];

        teams.stage3Rel6 = [
            teams.stage3Rel4Reset[0],
            firstDiv[1]
        ];

        teams.stage3Rel5Simulated = simulateStage(teams.stage3Rel5);
        teams.stage3Rel6Simulated = simulateStage(teams.stage3Rel6);

        this.setTeams(teams);
    }

    componentWillMount() {
        this.simulateEverything();
    }

    render() {

        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                teams: this.state.teams
            });
        });

        return (
            <div>
                <div className="container">
                    <header>
                        <h1><a href="/">Den nye Suppe.dk</a></h1>
                        <p>Forstå den nye ligastruktur i Superligaen</p>
                    </header>
                    <div className="steps">
                        {children}
                    </div>
                </div>
                <footer>
                    <p>Denne hjemmeside har på ingen måde relation til DBU, Divisionsforeningen, Spillerforeningen, rettighedshavere til Alka Superligaen, Hypercube eller andre, der har aktier i ligastrukturen. Der tages forbehold for fejl og mangler. Alle simuleringer er baseret på en subjektiv vægtning af holdenes styrker, men er ellers 100 % tilfældige fra gang til gang. Siden sætter et par cookies i forbindelse med brug af Google Analytics – så ved du det...</p>
                    <p>&copy; 2016 Thomas Riis Hansen – spørgsmål kan stilles til <a href="https://twitter.com/Riisen"> @Riisen</a> på Twitter</p>
                </footer>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
