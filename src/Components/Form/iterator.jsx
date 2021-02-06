import React from 'react';

export const IteratorComponent = (props) => {
    const { id, cn, valInfo, onAdd, onRmv } = props;
    return (
        <div className="add-info">
            <div className="add-btn-container">
                <button id={id} className="add-rmv-btns" onClick={onAdd}>+</button>
                <p className="add-info-text">{`Add ${valInfo} info`}</p>
            </div>
            <div className="rmv-btn-container">
                <button id={id} className="add-rmv-btns" onClick={onRmv}>-</button>
                <p className="add-info-text">{`Remove last ${valInfo} info`}</p>
            </div>
        </div>
    );
}