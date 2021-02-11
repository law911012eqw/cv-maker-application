import React from 'react'
import { IteratorSkills } from '../Form/iterator'

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [{
                skill: 'React JS',
            },
            {
                skill: 'Webpack',
            }]
        }

        this.addSkill = this.addSkill.bind(this);
        this.rmvSkill = this.rmvSkill.bind(this);
    }
    addSkill(e) {
        e.preventDefault();
        let val = document.getElementById('skill-text-input').value;
        val   = Object.assign({}, {skill: val});
        const updateSkills = this.state.skills.concat(val);
        console.log(updateSkills);
        this.setState({
            skills: updateSkills
        })
    }
    rmvSkill(e){
        e.preventDefault();
        const id = e.target.id;
        const index = this.indexIsolator(id);
        this.state.skills.splice(index,1);
        this.setState(this.state);
    }
    indexIsolator(id) {
        //isolating the index from the id
        let index = id.split("").filter(function(val){
            return /^[\d]+$/.test(val);
        }).join("");
        return parseInt(index);
    }
    render() {
        const { label, toggleVisibility, id } = this.props;
        const skills = this.state.skills;
        const iteratorSkills = <IteratorSkills onSubmit={this.addSkill}/>
        const iterableComponent = skills.map((s, index) => {
            console.log(skills);
            return (
                <div className="skill-wrapper">
                    <p className="skill-name">{s.skill}</p>
                    <button id={`round-btn${index}`} className="round-btn" onClick={this.rmvSkill}>-</button>
                </div>

            );
        })
        return (
            <div className="skills-container" id={id}>
                <p className="skill-headers">{label}</p>
                {iterableComponent}
                {toggleVisibility ? iteratorSkills : null}
            </div>
        );
    }
}

export default Skills;