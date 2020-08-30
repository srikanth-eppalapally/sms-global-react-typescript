import React from 'react';
import { connect } from 'react-redux';
import AppState from '../states/AppState';
import { onSendingSms, handleInputChange } from '../actions/SendSmsAction';
import SendSmsForm from './Forms/SendSmsForm';


const mapStateToProps = (state: AppState) => {
    return {
        sendSmsForm: state.sendSmsState.sendSmsForm
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
    const { sendSmsForm, handleInputChange, onSendingSms } = props;
    return (
        <div className="sms-container">
            <SendSmsForm onSubmit={() => onSendingSms()} sendSmsForm={sendSmsForm} handleChange={handleInputChange} />
        </div >
    );
}



export const SendSms = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedSendSms);

