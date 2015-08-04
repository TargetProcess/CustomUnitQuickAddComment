import React from 'react';

import {customUnits as cu} from 'targetprocess-mashup-helper';
import template from './template.html';

cu.add({
    id: 'add_comment',
    name: 'Add Comment',
    template: template,
    sizes: [cu.sizes.LIST]
});

import Mashup from './Mashup';

React.render(<Mashup />, document.querySelector('#RestUI_Board'));
