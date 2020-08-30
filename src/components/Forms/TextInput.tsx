import * as React from 'react';


type HtmlEvent = React.ChangeEvent<HTMLInputElement>


interface Props {
    name: string;
    onChange: React.EventHandler<HtmlEvent>;
    label: string;
    type: string;
    value: any;
    error: string;
    placeholder: string;
    required: boolean;
}

const TextInput: React.FC<Props> = ({ name,
    type,
    placeholder,
    onChange,
    value,
    error,
    label, required }) => {
    return (
        <div className={error ? 'form-group has-error' : 'form-group'}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                value={value}
                required={required}
                className="form-control"
            />
            {error && <p>{error}</p>}
        </div>
    )
}

export default TextInput;






