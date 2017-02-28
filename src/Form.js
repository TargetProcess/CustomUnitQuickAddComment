import React, {PropTypes} from 'react';
import RichtextEditor from './RichtextEditor';
import Bubble from './Bubble';
import $ from 'jquery';
import styles from './index.css';

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.richTextEditor.getValue());
    }

    handleCancelClick = () => {
        this.props.onClose();
    }

    handleOuterClick = () => {
        this.props.onOuterClick();
    }

    render() {
        const {target} = this.props;
        $(target).css('visibility', 'visible');

        const form = (
            <div className={styles.formContainer}>
                <form onSubmit={this.handleSubmit}>
                    <RichtextEditor ref={richTextEditor => this.richTextEditor = richTextEditor} />
                    <div className="controls-group">
                        <button type="submit" className="tau-btn tau-btn-green">Submit</button>
                        <button type="button" onClick={this.handleCancelClick} className="tau-btn">Cancel</button>
                    </div>
                </form>
            </div>
        );

        return <Bubble target={target} overlay={form} onOuterClick={this.handleOuterClick} />;
    }
}
