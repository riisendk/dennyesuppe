/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Stage1IntroComponent from 'components//Stage1IntroComponent.js';

describe('Stage1IntroComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Stage1IntroComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('stage1intro-component');
  });
});
