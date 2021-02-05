import React from 'react';

// function autoResize(element) {
//     element.style.height = "auto";
//     element.style.height = (element.scrollHeight+"px");
// }

const Textarea = (props) => {
    const { s, t, id, cn, name, val, ph, onChange } = props;
    return (
        <textarea style={s} type={t} id={id} className={cn} name={name} value={val} placeholder={ph} onChange={onChange}></textarea>
    );
}

export default Textarea;