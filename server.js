var _ = require('lodash');

const stage1Teams = [
    { ID: 1, Name: 'AGF', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.6 },
    { ID: 2, Name: 'Brøndby', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.65 },
    { ID: 3, Name: 'Esbjerg', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.25 },
    { ID: 4, Name: 'FC København', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 1 },
    { ID: 5, Name: 'FC Midtjylland', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.9 },
    { ID: 6, Name: 'FC Nordsjælland', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.4 },
    { ID: 7, Name: 'Horsens', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.1 },
    { ID: 8, Name: 'Lyngby', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.2 },
    { ID: 9, Name: 'OB', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.7 },
    { ID: 10, Name: 'Randers', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.45 },
    { ID: 11, Name: 'Silkeborg', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.2 },
    { ID: 12, Name: 'SønderjyskE', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.45 },
    { ID: 13, Name: 'Viborg', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.25 },
    { ID: 14, Name: 'AaB', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.55 }
];

const firstDiv = [
    { ID: 15, Name: 'Hobro', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.2 },
    { ID: 16, Name: 'Vejle', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.15 },
    { ID: 17, Name: 'HB Køge', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 0.1 },
];

const simulate = (team, teams) => {

    const isPlayed = (t) => {
        let found = false;
        team.Played.forEach((p) => {
            if (t.ID == p.ID) {
                found = true;
            }
        });
        return found;
    };

    const calculatePropability = (skill) => {
        return 450 * skill;
    };

    teams.forEach((t) => {
        let ip = isPlayed(t);
        if (!ip) {

            team1Prop = calculatePropability(team.Skill); // 0.6 * 450 = 270
            team2Prop = calculatePropability(t.Skill); // 0.65 * 450 = 293

            let randNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

            if (randNumber > 1000 - team2Prop) { // 707
                t.W = t.W + 1;
                team.L = team.L + 1;
            } else if (randNumber > team1Prop) { // 270 
                t.D = t.D + 1;
                team.D = team.D + 1;
            } else {
                t.L = t.L + 1;
                team.W = team.W + 1;
            }

            team.Played.push(t);
            t.Played.push(team);
        }
    });
};

const reset = (stageTeams, keepPoints) => {
    stageTeams.forEach((t) => {
        if (!keepPoints) {
            t.Points = [];
        }
        t.Played = [];
        t.W = 0;
        t.D = 0;
        t.L = 0;
    });
};

const simulateStage = (stageTeams) => {

    let count = 0;
    for (i = 0; i < stageTeams.length * 2; i++) {

        let team = stageTeams[count];
        let otherTeams = (teams) => {
            let withoutMe = [];
            teams.forEach((t) => {
                if (t.ID != team.ID) {
                    withoutMe.push(t);
                }
            });
            return withoutMe;
        };

        simulate(team, otherTeams(stageTeams));

        if (i == stageTeams.length - 1) {
            count = 0;

            stageTeams.forEach((t) => {
                t.Played = [];
            });
        } else {
            count++;
        }
    }

    let sorted = (_.sortBy(stageTeams, (t) => {
        t.Points = 1 * t.Points + (t.W * 3 + t.D);
        return t.Points;
    })).reverse();

    console.log('Hold', 'K', 'V', 'U', 'T', 'P');
    sorted.forEach((t) => {
        console.log(t.Name, t.W + t.D + t.L, t.W, t.D, t.L, t.Points);
    });

    return sorted;

};

console.log('Stage 1:\r\n');

let stage1Played = simulateStage(stage1Teams);
reset(stage1Teams, true);

console.log('\r\nStage 2 - Mesterskab:\r\n');

let stage2Champs = stage1Played.slice(0, 6);
let stage2ChampsPlayed = simulateStage(stage2Champs);
reset(stage2Champs, false);

let stage2Relegation1 = [];
stage2Relegation1.push(stage1Played[6]);
stage2Relegation1.push(stage1Played[9]);
stage2Relegation1.push(stage1Played[10]);
stage2Relegation1.push(stage1Played[13]);

let stage2Relegation2 = [];
stage2Relegation2.push(stage1Played[7]);
stage2Relegation2.push(stage1Played[8]);
stage2Relegation2.push(stage1Played[11]);
stage2Relegation2.push(stage1Played[12]);

console.log('\r\nStage 2 - Nedrykning, pulje 1:\r\n');

let stage2RelPlayed1 = simulateStage(stage2Relegation1);

console.log('\r\nStage 2 - Nedrykning, pulje 2:\r\n');

let stage2RelPlayed2 = simulateStage(stage2Relegation2);

reset(stage2Relegation1, false);
reset(stage2Relegation2, false);

let stage3Europe1 = [];
stage3Europe1.push(stage2RelPlayed1[0]);
stage3Europe1.push(stage2RelPlayed2[1]);

console.log('\r\nStage 3 - Europakvalsemi 1:\r\n');

let stage3EuropePlayed1 = simulateStage(stage3Europe1);

let stage3Europe2 = [];
stage3Europe2.push(stage2RelPlayed1[1]);
stage3Europe2.push(stage2RelPlayed2[0]);

console.log('\r\nStage 3 - Europakvalsemi 2:\r\n');

let stage3EuropePlayed2 = simulateStage(stage3Europe2);

reset(stage3Europe1, false);
reset(stage3Europe2, false);

let stage3Europe3 = [];
stage3Europe3.push(stage3EuropePlayed1[0]);
stage3Europe3.push(stage3EuropePlayed2[0]);

console.log('\r\nStage 3 - Europakvalfinale:\r\n');

let stage3EuropePlayed3 = simulateStage(stage3Europe3);

reset(stage3Europe3, false);

let stage3Europe4 = [];
stage3Europe4.push(stage2ChampsPlayed[2]);
stage3Europe4.push(stage3EuropePlayed3[0]);

console.log('\r\nStage 3 - Endelig Europa:\r\n');

let stage3EuropePlayed4 = simulateStage(stage3Europe4);

let stage3Relegation1 = [];
stage3Relegation1.push(stage2RelPlayed1[2]);
stage3Relegation1.push(stage2RelPlayed2[3]);

console.log('\r\nStage 3 - Nedrykningsemi 1:\r\n');

let stage3RelPlayed1 = simulateStage(stage3Relegation1);

let stage3Relegation2 = [];
stage3Relegation2.push(stage2RelPlayed1[3]);
stage3Relegation2.push(stage2RelPlayed2[2]);

console.log('\r\nStage 3 - Nedrykningsemi 2:\r\n');

let stage3RelPlayed2 = simulateStage(stage3Relegation2);

reset(stage3Relegation1, false);
reset(stage3Relegation2, false);

let stage3Relegation3 = [];
stage3Relegation3.push(stage3RelPlayed1[0]);
stage3Relegation3.push(stage3RelPlayed2[0]);

console.log('\r\nStage 3 - Nedrykning vinderfinale:\r\n');

let stage3RelPlayed3 = simulateStage(stage3Relegation3);

let stage3Relegation4 = [];
stage3Relegation4.push(stage3RelPlayed1[1]);
stage3Relegation4.push(stage3RelPlayed2[1]);

console.log('\r\nStage 3 - Nedrykning taberfinale:\r\n');

let stage3RelPlayed4 = simulateStage(stage3Relegation4);

reset(stage3Relegation3);
reset(stage3Relegation4);

let stage3Relegation5 = [];
stage3Relegation5.push(stage3RelPlayed3[1]);
stage3Relegation5.push(firstDiv[2]);

console.log('\r\nStage 3 - Nedrykning kval 1:\r\n');

let stage3RelPlayed5 = simulateStage(stage3Relegation5);

let stage3Relegation6 = [];
stage3Relegation6.push(stage3RelPlayed4[0]);
stage3Relegation6.push(firstDiv[1]);

console.log('\r\nStage 3 - Nedrykning kval 2:\r\n');

let stage3RelPlayed6 = simulateStage(stage3Relegation6);

console.log('\r\nDirekte nedrykker:\r\n');

console.log(stage3RelPlayed4[1].Name);