import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AppState from '../states/AppState';
import { onSmsReport } from '../actions/SmsReportAction';
import Select from './Forms/Select';
import { SmsReportCard } from './SmsReportCard';
import { MessageList } from './MessageList';



const mapStateToProps = (state: AppState) => {
    return {
        messageReport: state.smsReportState.messageReport,
        messagesList: state.smsReportState.messagesList
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onSmsReport: () => dispatch(onSmsReport())
    }
}

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const UnconnectedSmsReport: React.FC<Props> = (props) => {
    const {onSmsReport} = props;
    const [selectValue, setSelectValue] = useState(5);
    useEffect(() => {
        onSmsReport();
    }, [onSmsReport])
    const { messageReport, messagesList } = props;
    return (
        <div className="sms-container">
            <Select label="From"
                name="from"
                value={selectValue}
                options={[{
                    value: 24,
                    label: '24 Hours',
                }, {
                    value: 48,
                    label: '48 Hours',
                }, {
                    value: 72,
                    label: '72 Hours',
                }]}
                onChange={(e) => setSelectValue(Number(e.target.value))}
            />

            <SmsReportCard messageReport={messageReport}/>

            <MessageList list={messagesList} />
        </div >
    );
}



export const SmsReport = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedSmsReport);

