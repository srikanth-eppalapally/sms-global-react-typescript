import React from "react";



type HtmlEvent = React.ChangeEvent<HTMLSelectElement>
interface Props {
    name: string;
    onChange: React.EventHandler<HtmlEvent>;
    label: string;
    value: number;
    options: Array<Option>;
}

interface Option {
    value: number;
    label: string;
}

const Select: React.FC<Props> = ({ name, label, options, onChange, value }) => {
 //   console.log(options);
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={(e) => onChange(e)} className="form-control">
                <option value="" />
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;