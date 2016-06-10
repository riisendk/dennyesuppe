var _ = require('lodash');

export const stage1Teams = [
    { ID: 1, Name: 'AGF', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 5.4, className: 'agf' },
    { ID: 2, Name: 'Brøndby', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 6.2, className: 'bif' },
    { ID: 3, Name: 'Esbjerg', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 2.2, className: 'efb' },
    { ID: 4, Name: 'FC København', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 9.4, className: 'fck' },
    { ID: 5, Name: 'FC Midtjylland', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 8.6, className: 'fcm' },
    { ID: 6, Name: 'FC Nordsjælland', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 3.1, className: 'fcn' },
    { ID: 7, Name: 'Horsens', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 1.9, className: 'ach' },
    { ID: 8, Name: 'Lyngby', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 2, className: 'lbk' },
    { ID: 9, Name: 'OB', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 7.2, className: 'ob' },
    { ID: 10, Name: 'Randers', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 5.4, className: 'rfc' },
    { ID: 11, Name: 'Silkeborg', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 2.5, className: 'sif' },
    { ID: 12, Name: 'SønderjyskE', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 6, className: 'sje' },
    { ID: 13, Name: 'Viborg', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 3.6, className: 'vff' },
    { ID: 14, Name: 'AaB', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 6.9, className: 'aab' }
];

export const firstDiv = [
    { ID: 15, Name: 'Hobro', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 1.2 },
    { ID: 16, Name: 'Vejle', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 1 },
    { ID: 17, Name: 'HB Køge', Points: [], W: 0, D: 0, L: 0, Played: [], Skill: 1 }
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

    const calculatePropability = (skill1, skill2) => {

        let v1 = skill1 / (skill1 + skill2);
        let v2 = skill2 / (skill1 + skill2);

        let draw = 180;
        let w1 = v1 * (1000 - draw)/2;
        let w2 = v2 * (1000 - draw)/2;

        let prop = {
            Team1: w1,
            Team2: w2,
            Draw: draw
        };

        return prop;
    };

    teams.forEach((t) => {
        let ip = isPlayed(t);
        if (!ip) {

            let prop = calculatePropability(team.Skill, t.Skill);

            let randNumber = Math.floor(Math.random() * (prop.Team1 + prop.Team2 + prop.Draw)) + 1;

            if (randNumber > (prop.Team1 + prop.Team2 + prop.Draw) - prop.Team2) {
                t.W = t.W + 1;
                team.L = team.L + 1;
            } else if (randNumber > prop.Team1) {
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

const clone = (original) => {
    let clone = [];
    for (var n = 0; n < original.length; n++) {
        clone.push({});
        for (var prop in original[n]) {
            if (original[n].hasOwnProperty(prop)) {
                clone[n][prop] = original[n][prop];
            }
        }
    }
    return clone;
}

export const reset = (stageTeams, keepPoints) => {

    stageTeams = clone(stageTeams);

    stageTeams.forEach((t) => {
        if (!keepPoints) {
            t.Points = [];
        }
        t.Played = [];
        t.W = 0;
        t.D = 0;
        t.L = 0;
    });

    return stageTeams;
};

export const simulateStage = (stageTeams, rounds = 2) => {

    stageTeams = clone(stageTeams);

    let count = 0;
    for (var i = 0; i < stageTeams.length * rounds; i++) {

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

    return sorted;

};