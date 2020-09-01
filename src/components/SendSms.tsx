import React from 'react';
import { connect } from 'react-redux';
import AppState from '../states/AppState';
import { onSendingSms, handleInputChange } from '../actions/SendSmsAction';
import SendSmsForm from './Forms/SendSmsForm';
import { MessageList } from './MessageList';


const mapStateToProps = (state: AppState) => {
    return {
        sendSmsForm: state.sendSmsState.sendSmsForm,
        messages: state.sendSmsState.messages
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onSendingSms: () => dispatch(onSendingSms()),
        handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleInputChange(e)),
    }
}



type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const UnconnectedSendSms: React.FC<Props> = (props) => {
    const { sendSmsForm, handleInputChange, onSendingSms, messages } = props;
    return (
        <div className="sms-container">
            <SendSmsForm onSubmit={() => onSendingSms()} sendSmsForm={sendSmsForm} handleChange={handleInputChange} />
            {messages.length ? <MessageList list={messages} fullWidth={true} /> : null}
        </div >
    );
}



export const SendSms = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedSendSms);

