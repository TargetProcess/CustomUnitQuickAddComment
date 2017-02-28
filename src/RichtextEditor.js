import React from 'react';
import styles from './index.css';

const markdownMarker = '<!--markdown-->';

export default class RichtextEditor extends React.Component {
    componentDidMount() {
        setTimeout(() => this.textarea && this.textarea.focus(), 0);
    }

    getValue() {
        return markdownMarker + this.textarea.value;
    }

    render() {
        return (
            <div className={styles.textareaContainer}>
                <textarea ref={textarea => this.textarea = textarea}
                    className={`${styles.textarea} i-role-textarea`} autoFocus={true} />
            </div>
        );
    }
}
