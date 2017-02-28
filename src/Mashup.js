import React from 'react';
import $ from 'jquery';
import configurator from 'tau/configurator';
import Form from './Form';

const appPath = configurator.getApplicationPath();

export default class Mashup extends React.Component {

    state = {
        isActive: false
    }

    componentDidMount() {
        this.clickListener = (e) => {
            e.stopPropagation();

            const entityId = $(e.target).closest('.i-role-card').data('entityId');

            this.setState({
                entityId,
                isActive: (entityId === this.state.entityId) ? !this.state.isActive : true,
                target: e.target
            });
        };

        $(document.body).on('click', '.i-role-card .cu-quickaddcomment-trigger', this.clickListener);
    }

    componentWillUnmount() {
        $(document.body).off('click', '.i-role-card .cu-quickaddcomment-trigger', this.clickListener);
    }

    handleSubmit = (value) => {
        this.setState({
            isActive: false
        });

        return $.ajax({
            type: 'post',
            url: `${appPath}/api/v1/Comments/`,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify({
                general: {
                    id: this.state.entityId
                },
                description: value
            })
        });
    }

    handleClose = () => {
        this.setState({
            isActive: false
        });
    }

    render() {
        if (!this.state.isActive) {
            return null;
        }

        return (
            <Form
                key={this.state.entityId}
                target={this.state.target}
                onSubmit={this.handleSubmit}
                onClose={this.handleClose}
                onOuterClick={this.handleClose} />
        );
    }
}
