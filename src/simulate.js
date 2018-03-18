var _ = require('lodash');

export const stage1Teams = [
    { ID: 2, Name: 'Brøndby IF', Points: 60, W: 18, D: 6, L: 2, Played: [], Skill: 9.2, className: 'bif' },
    { ID: 5, Name: 'FC Midtjylland', Points: 60, W: 19, D: 3, L: 4, Played: [], Skill: 9.1, className: 'fcm' },
    { ID: 6, Name: 'FC Nordsjælland', Points: 50, W: 15, D: 5, L: 6, Played: [], Skill: 7.2, className: 'fcn' },
    { ID: 4, Name: 'FC København', Points: 44, W: 13, D: 5, L: 8, Played: [], Skill: 8.1, className: 'fck' },
    { ID: 14, Name: 'AaB', Points: 36, W: 8, D: 12, L: 6, Played: [], Skill: 5.2, className: 'aab' },
    { ID: 7, Name: 'AC Horsens', Points: 35, W: 7, D: 14, L: 5, Played: [], Skill: 4.8, className: 'ach' },
    { ID: 13, Name: 'Hobro IK', Points: 32, W: 8, D: 8, L: 10, Played: [], Skill: 3.8, className: 'hob' },
    { ID: 12, Name: 'SønderjyskE', Points: 31, W: 8, D: 7, L: 11, Played: [], Skill: 3.8, className: 'sje' },    
    { ID: 9, Name: 'OB', Points: 31, W: 8, D: 7, L: 11, Played: [], Skill: 3.8, className: 'ob' },
    { ID: 1, Name: 'AGF', Points: 29, W: 7, D: 8, L: 11, Played: [], Skill: 3.7, className: 'agf' },
    { ID: 11, Name: 'Silkeborg IF', Points: 28, W: 8, D: 4, L: 14, Played: [], Skill: 3.5, className: 'sif' },
    { ID: 8, Name: 'Lyngby BK', Points: 21, W: 4, D: 9, L: 13, Played: [], Skill: 2.2, className: 'lbk' },
    { ID: 10, Name: 'Randers FC', Points: 20, W: 4, D: 8, L: 14, Played: [], Skill: 1.3, className: 'rfc' },
    { ID: 3, Name: 'FC Helsingør', Points: 20, W: 6, D: 2, L: 18, Played: [], Skill: 0.7, className: 'fch' }
];

export const firstDiv = [
    { ID: 15, Name: 'Vejle Boldklub', Points: 0, W: 0, D: 0, L: 0, Played: [], Skill: 1.2 },
    { ID: 16, Name: 'Esbjerg fB', Points: 0, W: 0, D: 0, L: 0, Played: [], Skill: 1 },
    { ID: 17, Name: 'Vendsyssel FF', Points: 0, W: 0, D: 0, L: 0, Played: [], Skill: 1 }
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
        let w1 = v1 * (1000 - draw) / 2;
        let w2 = v2 * (1000 - draw) / 2;

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
            t.Points = 0;
        }
        t.Played = [];
        t.W = 0;
        t.D = 0;
        t.L = 0;
    });

    return stageTeams;
};

export const simulateStage = (stageTeams, rounds = 2, passThrough = false) => {

    if (!passThrough) {

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

    }

    return stageTeams;

};