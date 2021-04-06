import React from 'react'
import { IteratorSkills } from '../Form/iterator'

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [{
                skill: 'React JS',
                isHovered: false
            },
            {
                skill: 'Webpack',
                isHovered: false
            }],
        }
        this.addSkill = this.addSkill.bind(this);
        this.rmvSkill = this.rmvSkill.bind(this);
        this.changeTextAfterEnter = this.changeTextAfterEnter.bind(this);
        this.changeTextAfterLeave = this.changeTextAfterLeave.bind(this);
        this.indexIsolator = this.indexIsolator.bind(this);
    }
    addSkill(e) {
        e.preventDefault();
        let val = document.getElementById('skill-text-input').value;
        val = Object.assign({}, { skill: val });
        const updateSkills = this.state.skills.concat(val);
        this.setState({
            skills: updateSkills
        })
    }
    //Duplicate due to bug when two associated element are together especially with mapped list of elements
    changeTextAfterEnter(e) {
        const index = this.indexIsolator(e.target.id);
        const copyState  = [...this.state.skills] ;
        copyState[index] = { ...copyState[index], isHovered: true}
        this.setState( {skills: copyState})
    }
    changeTextAfterLeave(e) {
        const index = this.indexIsolator(e.target.id);
        const copyState  = [...this.state.skills] ;
        copyState[index] = { ...copyState[index], isHovered: false}
        this.setState( {skills: copyState})
    }
    rmvSkill(e) {
        e.preventDefault();
        const id = e.target.id;
        const index = this.indexIsolator(id);
        this.state.skills.splice(index, 1);
        this.setState(this.state);
    }
    indexIsolator(id) {
        //isolating the index from the id
        let index = id.split("").filter(function (val) {
            return /^[\d]+$/.test(val);
        }).join("");
        return parseInt(index);
    }
    render() {
        const { label, toggleVisibility, id } = this.props;
        const skills = this.state.skills;
        const iteratorSkills = <IteratorSkills onSubmit={this.addSkill} />
        const iterableComponent = skills.map((s, index) => {
            return (
                <div
                    key={index}
                    id={`skill${index}`}
                    className="skill-wrapper"
                    onClick={this.rmvSkill}
                    onMouseEnter={this.changeTextAfterEnter}
                    onMouseOut={this.changeTextAfterLeave}
                >
                    {s.isHovered ? 'remove' : s.skill}
                </div>
            );
        })
        return (
            <div className="skills-container" id={id}>
                <p className="skill-headers">{label}</p>
                <div className="skill-list">
                    {iterableComponent}
                </div>
                {toggleVisibility ? iteratorSkills : null}
            </div>
        );
    }
}

export default Skills;