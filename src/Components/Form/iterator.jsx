import React from 'react';
import Input from '../Form/Input_helpers';

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

export const IteratorSkills = (props) => {
    const { val, onSubmit } = props;
    return (
        <form className="skill-addition-wrapper">
            <Input t="text" val={val} id="skill-text-input" />
            <Input t="submit" val="+" cn="skill-appender" onSubmit={onSubmit} />
        </form>
    )
}
export const IteratorLangs = (props) => {
    const { val, onSubmit } = props;
    return (
        <form className="skill-addition-wrapper">
            <Input t="text" val={val} id="lang-text-input" />
            <select id="lang-lvl-options">
                <option value="1">1</option>
                <option value="2">2</option>
                <option selected value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <Input t="submit" val="+" cn="skill-appender" onSubmit={onSubmit} />
        </form>
    )
}