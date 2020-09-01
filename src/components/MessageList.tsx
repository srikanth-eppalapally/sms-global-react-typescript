import React from 'react';
import { IMessage } from '../states/SmsReportState';




interface Props {
    list: IMessage[],
    fullWidth: boolean
}
export const MessageList: React.FC<Props> = ({ list, fullWidth }) => {

    return (
        <div className="messages">
            <h3>Showing {list.length} message{list.length > 1 ? 's' : ''}</h3>
            <div className="card-box">
                {
                    list.map((msg, i) => {
                        return (
                            <div className={fullWidth ? 'card w-100' : 'card'} key={msg.id}>
                                {
                                    Object.keys(msg).map(m => {
                                        return (
                                            <label key={msg.outgoing_id}>
                                                <strong>{m}:</strong> {msg[m]}</label>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>


    );
}