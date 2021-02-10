import React from 'react';

export const IteratorComponent = (props) => {
    const { id, valInfo, onAdd, onRmv } = props;
    return (
        <div className="add-info">
            <div className="add-btn-container">
                <button id={id} className="add-rmv-btns" onClick={onAdd}>+</button>
                <p className="add-info-text">{`Add ${valInfo}`}</p>
            </div>
            <div className="rmv-btn-container">
                <button id={id} className="add-rmv-btns" onClick={onRmv}>-</button>
                <p className="add-info-text">{`Remove last ${valInfo}`}</p>
            </div>
        </div>
    );
}

export const IteratorComponent2 = (props) => {
    const { id, valInfo, onAdd, onRmv } = props;
    return (
        <div className="add-info2">
            <div className="add-btn-container2">
                <button id={id} className="add-rmv-btns2" onClick={onAdd}>+</button>
                <p className="add-info-text">{`Add ${valInfo}`}</p>
            </div>
            <div className="rmv-btn-container2">
                <button id={id} className="add-rmv-btns2" onClick={onRmv}>-</button>
                <p className="add-info-text">{`Remove last ${valInfo}`}</p>
            </div>
        </div>
    );
}