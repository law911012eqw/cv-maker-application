import React from 'react';

const Input = (props) => {
    const { t, id, cn, name, val, ph, onSubmit, onChange } = props;
    return (
        <input type={t} id={id} className={cn} name={name} value={val} placeholder={ph} onClick={onSubmit} onChange={onChange}></input>
    );
}

export default Input;