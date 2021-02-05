import React from 'react';

export const AppendComponent = (props) => {
    const { id, valInfo, onClick} = props;
    return (
        <div className="add-info">
            <button id={id} className="btn-append" onClick={onClick}>+</button>
            <p className="add-info-text">{`Add ${valInfo} info`}</p>
        </div>
    );
}