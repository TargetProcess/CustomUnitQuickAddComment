import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function doWithTauBubble($target, method) {
    if ($target.tauBubble('instance')) {
        $target.tauBubble(method);
    }
}

export default class Bubble extends React.Component {
    static propTypes = {
        onOuterClick: PropTypes.func.isRequired,
        overlay: PropTypes.node.isRequired,
        target: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.content = document.createElement('div');
        this.renderBubble(this.props.target, this.props.overlay);
        this.documentListener = ::this.handleDocumentClick;
        document.body.addEventListener('click', this.documentListener);
    }

    componentWillReceiveProps(nextProps) {
        const {target: prevTarget} = this.props;
        const {target: nextTarget} = nextProps;

        if (prevTarget !== nextTarget) {
            doWithTauBubble($(prevTarget), 'destroy');
            this.renderBubble(nextTarget, nextProps.overlay);
        }
    }

    componentWillUnmount() {
        doWithTauBubble($(this.props.target), 'destroy');
        document.body.removeEventListener('click', this.documentListener);
    }

    renderBubble(target, overlay) {
        /*
         https://facebook.github.io/react/docs/react-dom.html#render
         https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element

         ReactDOM.render() currently returns a reference to the root ReactComponent instance. However, using this return
         value is legacy and should be avoided because future versions of React may render components asynchronously in
         some cases. If you need a reference to the root ReactComponent instance, the preferred solution is to attach a
         callback ref to the root element.
         */

        this.bubble = ReactDOM.render(overlay, this.content);

        const $target = $(target);
        $target
            .tauBubble({
                target: target,
                content: this.content,
                showOnCreation: true,
                showEvent: 'none',
                hideEvent: 'none',
                documentMouseEvent: 'none',
                stackName: 'add_comment_bubble',
                zIndex: 999
            });

        setTimeout(() => {
            doWithTauBubble($target, 'adjustPosition');
        }, 50);

        setTimeout(() => {
            doWithTauBubble($target, 'adjustPosition');
        }, 100);
    }

    handleDocumentClick = (e) => {
        if (e.target === this.bubble || this.bubble.contains(e.target)) {
            return;
        }

        const targetReactNode = ReactDOM.findDOMNode(this.props.target);
        if (e.target === targetReactNode || targetReactNode.contains(e.target)) {
            return;
        }

        this.props.onOuterClick();
    }

    render() {
        return null;
    }
}
