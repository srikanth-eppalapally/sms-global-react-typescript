import React from 'react';
import { IsmsReport } from '../states/SmsReportState';




interface Props {
    messageReport: IsmsReport
}
export const SmsReportCard: React.FC<Props> = ({ messageReport }) => {
    return (
        <div className="card">
            <ul>
            {
                Object.keys(messageReport).map((report, i) => 
                    <li key={i}><strong>{report}:</strong> {messageReport[report]} </li>
                    )
            }
            </ul>
        </div >
    );
}