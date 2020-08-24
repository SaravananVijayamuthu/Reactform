import React from 'react';

export default function FormInput({
    controlId,
    name,
    label,
    value,
    handleChange,
    error,
    type
})
{
    return (
        <div className= "form-group">
            <label htmlFor={controlId}>{label}</label>
            <input 
                className={`form-control ${error && "is-invalid"}`}
                name={name}
                type={type||"text"}
                value={value}
                onChange={handleChange}
                id={controlId}
            />
            <div className="invalid-feed">{error}</div>
        </div>
    );
}