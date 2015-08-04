import React from 'react';
import $ from 'jquery';

const markdownMarker = '<!--markdown-->';

export default class RichtextEditor extends React.Component {

    componentDidMount() {

        // const dom = React.findDOMNode(this);

        // if ($.ui.richeditorMarkdown) {

        //     $(dom).richeditorMarkdown({
        //         saveAction: {
        //             available: false
        //         },
        //         cancelOptions: {
        //             available: false
        //         }
        //     })
        //     .richeditorMarkdown('show');

        // } else {

            setTimeout(() => this.refs.textarea.getDOMNode().focus(), 0);

        // }

    }

    // componentWillUnmount() {

    //     // if ($.ui.richeditorMarkdown) {

    //     //     const dom = React.findDOMNode(this);

    //     //     if ($(dom).richeditorMarkdown('instance')) {

    //     //         $(dom).richeditorMarkdown('destroy');

    //     //     }

    //     // }

    // }

    render() {

        return (
            <div>
                <textarea ref="textarea" className="i-role-textarea" style={{
                    width: 300,
                    height: 200
                }} autoFocus={true} />
            </div>
        );

    }

    get value() {

        // if ($.ui.richeditorMarkdown) {

        //     const dom = React.findDOMNode(this);

        //     if ($(dom).richeditorMarkdown('instance')) {

        //         return $(dom).richeditorMarkdown('getText');

        //     }

        // }

        return markdownMarker + this.refs.textarea.getDOMNode().value;

    }
}
