import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PresentationComponent from './components/PresentationComponent';
import Stage1IntroComponent from './components/Stage1IntroComponent';
import Stage1SimulatedComponent from './components/Stage1SimulatedComponent';
import Stage2IntroComponent from './components/Stage2IntroComponent';
import Stage2SimulatedComponent from './components/Stage2SimulatedComponent';
import Stage3SimulatedEuropeComponent from './components/Stage3SimulatedEuropeComponent';
import Stage3SimulatedRelegationComponent from './components/Stage3SimulatedRelegationComponent';

import AppComponent from './components/Main';

export default (
	<Route path="/" component={AppComponent}>
		<IndexRoute component={PresentationComponent} />
        <Route path="stage1-intro" component={Stage1IntroComponent} />
        <Route path="stage1-simulated" component={Stage1SimulatedComponent} />
        <Route path="stage2-intro" component={Stage2IntroComponent} />
        <Route path="stage2-simulated" component={Stage2SimulatedComponent} />
        <Route path="stage3-simulated-europe" component={Stage3SimulatedEuropeComponent} />
        <Route path="stage3-simulated-relegation" component={Stage3SimulatedRelegationComponent} />
	</Route>
);