import React from 'react'
import Input from '../Form/Input_helpers';
import { IteratorComponent2 } from '../Form/iterator'

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skillNum: 0,
            skillLevel: {
                1: 'Novice',
                2: 'Average',
                3: 'Intermediate',
                4: 'Proficient',
                5: 'Expert'
            },
            skills: [{
                name: 'Javascript',
                levelNum: '2',
                levelInWords: 'Average'
            }],
        }

        this.checkSkillLevel = this.checkSkillLevel.bind(this);
    }

    checkSkillLevel() {

    }

    handleFieldChangeWithObj(e) {
        let name = e.target.name;
        const arr = name.split(/[.\[\]]/);
        let splitName = name.split('.');
        let index = arr[1];
        let state = arr[0];
        let stateProp = splitName[1];
        let copyArray = [...this.state.experience]; //a copy of state array
        //update the state inside the array
        copyArray[index] = {...copyArray[index], [`${stateProp}`]: e.target.value}
        //replace the array of objects state with the updated one
        this.setState({
            [`${state}`]: copyArray
        })
    }
    render() {
        const { label, toggleVisibility, id } = this.props;
        const skills = this.state.skills;
        const iteratorComponent2 = <IteratorComponent2 valInfo="skills" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj} />
        //const iterableSkillLevel = 
        const iterableComponent = skills.map((s, index) => {
            console.log(s);
            return (
                <p>{s.name}</p>
            );
        })
        return (
            <div className="main-containers" id={id}>
                <p className="skill-headers">{label}</p>
                {iterableComponent}
                {toggleVisibility ? iteratorComponent2 : null}
            </div>
        );
    }
}

export default Skills;