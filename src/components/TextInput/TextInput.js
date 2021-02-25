import React from 'react'

const TextInput = (props) => {
    return (
        <label>
            {props.label}: {props.required && <div className="required-label">*required</div>} <br />
            <input 
                className={props.className ? props.className : ''}
                id={props.id ? props.id : ''}
                type="text" 
                name={props.name}
                value={props.value || ''} 
                onChange={e => props.setValue(e.target.value)} 
                placeholder={props.placeholder} 
                />
            <br />
        </label>
    )
}

export default TextInput