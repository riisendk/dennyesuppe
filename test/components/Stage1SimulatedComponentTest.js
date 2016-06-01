/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Stage1SimulatedComponent from 'components//Stage1SimulatedComponent.js';

describe('Stage1SimulatedComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Stage1SimulatedComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('stage1simulated-component');
  });
});
