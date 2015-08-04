import React, {PropTypes} from 'react';
import RichtextEditor from './RichtextEditor';
import Bubble from './Bubble';
import $ from 'jquery';

export default class Form extends React.Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        onOuterClick: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        target: PropTypes.object.isRequired
    }

    componentWillUnmount() {

        $(this.props.target).css('visibility', '');

    }

    render() {

        const {target} = this.props;

        $(target).css('visibility', 'visible');

        const form = (
            <div style={{
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: 3,
                padding: 5
            }}>
                <form onSubmit={this.handleSubmit}>
                    <div style={{
                        marginBottom: 5
                    }}>
                        <RichtextEditor ref="value" />
                    </div>
                    <div>
                        <button type="submit" className="tau-btn tau-btn-green">Submit</button>
                        <button type="button" onClick={this.handleClickCancel} className="tau-btn">Cancel</button>
                    </div>
                </form>
            </div>
        );

        return (
            <Bubble target={target} overlay={form} onOuterClick={this.handleOuterClick} />
        );

    }

    handleSubmit = (e) => {

        e.preventDefault();

        this.props.onSubmit(this.refs.value.value);

    }

    handleClickCancel = () => {

        this.props.onClose();

    }

    handleOuterClick = () => {

        this.props.onOuterClick();

    }

}
