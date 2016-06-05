'use strict';

import React from 'react';
import { Link } from 'react-router';

class PresentationComponent extends React.Component {

    render() {
        return (
            <div className="step-1">
                <p>Efter 21 år med den samme ligastruktur er det fra sæsonen 2016/17 tid til at prøve noget nyt i den danske Superliga. I stedet for den 'skæve' struktur med 33 kampe og den høje risiko for nedrykning, indføres nu et slutspil efter 26 kampe – og nok så væsentligt udvides rækken med to hold.</p>
                <p>Den nye struktur har skabt <a href="http://www.bt.dk/fodbold/hjulmand-sabler-ny-superliga-struktur-jeg-tror-ikke-en-skid-paa-den">en del debat</a>, formentlig fordi trænere, spillere, journalister og ikke mindst fans har svært ved at forstå, hvordan tingene kommer til at foregå. Det vil denne hjemmeside forsøge at hjælpe på. Så klik videre, hvis du gerne vil blive klogere på afviklingen af den kommende fodboldsæson i landets bedste række.</p>
                <p className="button">
                    <Link className="button" to={'stage1-intro'}>Sæt igang</Link>
                </p>
            </div>
        );
    }
}

PresentationComponent.displayName = 'PresentationComponent';

export default PresentationComponent;
