import React, {PropTypes} from 'react';
import $ from 'jquery';

export default class Bubble extends React.Component {

    static propTypes = {
        onOuterClick: PropTypes.func.isRequired,
        overlay: PropTypes.node.isRequired,
        target: PropTypes.object.isRequired
    }

    componentDidMount() {

        this.span = $('<span />').appendTo('body')[0];

        this.renderBubble(this.props.target, this.props.overlay);

        this.documentListener = ::this.handleClickDocument;
        document.body.addEventListener('click', this.documentListener);

    }

    componentWillUnmount() {

        $(this.props.target).tauBubble('destroy');
        document.body.removeEventListener('click', this.documentListener);

    }

    componentWillReceiveProps(nextProps) {

        const {target: prevTarget} = this.props;
        const {target: nextTarget} = nextProps;

        if (prevTarget !== nextTarget) {

            if ($(prevTarget).tauBubble('instance')) {

                $(prevTarget).tauBubble('destroy');

            }

            this.renderBubble(nextTarget, nextProps.overlay);

        }

    }

    render() {

        return null;

    }

    renderBubble(target, overlay) {

        this.bubble = React.render(overlay, this.span).getDOMNode();

        $(target)
            .tauBubble({
                target: target,
                content: this.span,
                showOnCreation: true,
                showEvent: 'none',
                hideEvent: 'none',
                documentMouseEvent: 'none',
                stackName: 'add_comment_bubble',
                zIndex: 999
            });

        setTimeout(() => {

            if ($(target).tauBubble('instance')) {

                $(target).tauBubble('adjustPosition');

            }

        }, 50);

        setTimeout(() => {

            if ($(target).tauBubble('instance')) {

                $(target).tauBubble('adjustPosition');

            }

        }, 100);

    }

    handleClickDocument = (e) => {

        const {target} = this.props;

        if (e.target !== React.findDOMNode(target) && !React.findDOMNode(target).contains(e.target)
            && e.target !== this.bubble && !this.bubble.contains(e.target)) {

            this.props.onOuterClick();

        }

    }
}
