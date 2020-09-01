import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AppState from '../states/AppState';
import { onSmsReport } from '../actions/SmsReportAction';
import Select from './Forms/Select';
import { MessageList } from './MessageList';
import { IMessage } from '../states/SmsReportState';



const mapStateToProps = (state: AppState) => {
    return {
        messageReport: state.smsReportState.messageReport
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
    const { onSmsReport, messageReport } = props;
    const [selectValue, setSelectValue] = useState(0);

    const [list, setList] = useState(messageReport.messages);

    const onSelect = (e: any) => {
        const selectedValue = Number(e.target.value);
        setSelectValue(selectedValue);
        setListOverTime(selectedValue);
    }

    const setListOverTime = (selectedValue: number) => {
        var ts = Math.round(new Date().getTime() / 1000);
        var tsPrevDt = ts - (selectedValue * 3600);
        if (messageReport.messages.length) {
            const messagesOverTime = messageReport.messages.filter((m: IMessage) => {
                const splitDtString = m.dateTime.split(' ');
                const date = new Date(splitDtString[0]);
                const timeSplits = splitDtString[1].split(':');
                date.setHours(Number(timeSplits[0]));
                date.setMinutes(Number(timeSplits[1]));
                date.setSeconds(Number(timeSplits[2]));
                return tsPrevDt < date.getTime()
            });
            setList(messagesOverTime);
        }
    }

    useEffect(() => {
        onSmsReport();
    }, [onSmsReport])
    return (
        <div className="sms-report-container">
            <Select label="From"
                name="from"
                placeholder="Select Any Time Period"
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
                onChange={(e) => onSelect(e)}
            />

            {list && list.length ?
                <MessageList list={list} fullWidth={false} /> : null}
        </div >
    );
}



export const SmsReport = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedSmsReport);

