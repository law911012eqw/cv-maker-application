import React from 'react';

const Textarea = (props) => {
    const { key, s, t, id, cn, name, val, ph, onChange } = props;
    return (
        <textarea
            key={key}
            style={s}
            type={t}
            id={id}
            className={cn}
            name={name}
            value={val}
            placeholder={ph}
            onChange={onChange}
            rows="1">
        </textarea>
    );
}

export default Textarea;