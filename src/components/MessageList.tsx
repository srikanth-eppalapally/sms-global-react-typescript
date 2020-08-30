import React from 'react';
import { IMessage } from '../states/SmsReportState';




interface Props {
    list: IMessage[]
}
export const MessageList: React.FC<Props> = ({ list }) => {

    return (
        <div className="messages">
            {
                list.map((msg, i) => {
                    return (
                        <div>
                            {
                                Object.keys(msg).map(m => {
                                    return (
                                        <label>{m}: msg[m]</label>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>


    );
}