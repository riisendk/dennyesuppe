'use strict';

import React from 'react';
import { Link } from 'react-router';

class FAQComponent extends React.Component {

    render() {
        const t = this.props.teams;

        const renderEuropeSentence = () => {
            if (t.stage2ChampsSimulated[2].ID == t.stage3Europe4Simulated[0].ID) {
                return (
                    <span>{t.stage2ChampsSimulated[2].Name} sikrede sig samtidig den sidste Europa League-plads.</span>
                );
            } else {
                return (
                    <span>Den sidste Europa League-plads gik til {t.stage3Europe4Simulated[0].Name}, som kvalificerede sig fra de otte nederste hold.</span>
                );
            }
        };

        const rel2League = t.stage3Rel5Simulated[1].ID < 15;
        const rel3League = t.stage3Rel6Simulated[1].ID < 15;

        const renderRelegationSentence1 = () => {
            if (rel2League) {
                return (
                    <span>, og får selskab af {t.stage3Rel5Simulated[1].Name}, der tabte kvalifikationskampen til {t.stage3Rel5Simulated[0].Name}</span>
                );
            } else if (rel3League) {
                return (
                    <span>, og får selskab af {t.stage3Rel6Simulated[1].Name}, der tabte kvalifikationskampen til {t.stage3Rel6Simulated[0].Name}</span>
                );
            } else {
                return (
                    <span>, mens {t.stage3Rel5Simulated[1].Name} må blive nede i 1. division efter nederlag til {t.stage3Rel5Simulated[0].Name}</span>
                );
            }
        };

        const renderRelegationSentence2 = () => {
            if (!rel2League && rel3League) {
                return (
                    <span>, mens {t.stage3Rel5Simulated[1].Name} må blive nede i 1. division efter nederlag til {t.stage3Rel5Simulated[0].Name}.</span>
                );
            } else if (rel2League && !rel3League) {
                return (
                    <span>, og {t.stage3Rel6Simulated[1].Name}, der fortsætter i 1. division en sæson endnu efter nederlag til {t.stage3Rel6Simulated[0].Name}.</span>
                );
            } else if (!rel2League && !rel3League) {
                return (
                    <span>, og {t.stage3Rel6Simulated[1].Name} ligeledes fortsætter i næstebedste række efter nederlag til {t.stage3Rel6Simulated[0].Name}.</span>
                );
            } else {
                return (
                    <span>, og {t.stage3Rel6Simulated[1].Name}, der ryger ud af Superligaen efter nederlag til {t.stage3Rel6Simulated[0].Name}.</span>
                );
            }
        }

        return (
            <div className="step-8">
                <h2>Opsummering og ofte stillede spørgsmål</h2>
                <p>Og således kom vi igennem en simulering af en Superliga-sæson med den nye struktur. <span className="gold">{t.stage2ChampsSimulated[0].Name}</span> blev danske mestre, <span className="silver">{t.stage2ChampsSimulated[1].Name}</span> vandt sølv og <span className="bronze">{t.stage2ChampsSimulated[2].Name}</span> bronze. {renderEuropeSentence() }</p>
                <p>{t.stage3Rel4Simulated[1].Name} rykkede direkte ned i 1. division{renderRelegationSentence1()}{renderRelegationSentence2()}</p>
                <p>Indviklet? Tja, al begyndelse er jo svær, og man skal holde tungen lige i munden for at forstå måske især nedrykningsspillet, og det kræver nok også en del tilvænning, at en europæisk plads pludselig er i spil for hold, der er sluttet langt fra toppen. For at opsummere er her de oftest stillede spørgsmål i relation til strukturen.</p>
                <ul>
                    <li>Bliver pointene halveret efter grundspillet? – <strong>Nej! Alle point bliver ført over til både mesterskabsspillet og kvalifikationsspillet.</strong></li>
                    <li>Rykker nr.14 direkte ud af Superligaen? – <strong>Nej! 14. pladsen rykker ikke direkte ned i 1. division. I princippet kan et hold tabe alle kampe indtil den afgørende taberfinale og stadig klare frisag.</strong></li>
                    <li>Men hvor mange nedrykkere er der så? – <strong>Der er altid én nedrykker fra Superligaen, og altid én direkte oprykker fra 1. division. Derudover kan to yderligere hold rykke hhv. ned og op.</strong></li>
                    <li>Hvad sker der, hvis pokalvinderen er blandt de tre øverste hold i mesterskabsspillet?– <strong>Så er det fjerdepladsen, der skal spille kvalifikationskamp om Europa League.</strong></li>
                    <li>Hvordan er strukturen i 1. division? – <strong>Her spilles der fortsat med 12 hold, der møder hinanden 3 gange hver.</strong></li>
                </ul>
                <p>Tak for fordi du besøgte denne hjemmeside – du er velkommen til at køre simuleringen igennem igen, og husk så, at den nye sæson starter allerede ugen efter EM-finalen er spillet!</p>
                <p className="button">
                    <Link className="button" to={'/'}>Start forfra</Link>
                </p>
            </div>
        );
    }
}

FAQComponent.displayName = 'FAQComponent';

export default FAQComponent;
