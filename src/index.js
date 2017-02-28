import React from 'react';
import ReactDOM from 'react-dom';
import Mashup from './Mashup';
import {customUnits} from 'targetprocess-mashup-helper';
import template from './template.html';

customUnits.add({
    id: 'add_comment',
    name: 'Add Comment',
    template: template,
    sizes: [customUnits.sizes.LIST]
});

ReactDOM.render(<Mashup />, document.getElementById('RestUI_Board'));
