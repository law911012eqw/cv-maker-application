import React from 'react'
import Input from '../Form/Input_helpers';
import { IteratorComponent2 } from '../Form/iterator'

class Langs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            langNum: 0,
            langLevel: {
                1: 'Novice',
                2: 'Average',
                3: 'Intermediate',
                4: 'Proficient',
                5: 'Expert'
            },
            langs: [{
                lang: 'Tagalog',
                level: '4',
                levelInWords: 'Proficient'
            },
            {
                lang: 'English',
                levelNum: '4',
                levelInWords: 'Proficient'
            }]
        }

        this.checkSkillLevel = this.checkSkillLevel.bind(this);
    }

    checkSkillLevel() {

    }

    handleFieldChangeWithObj(e) {
        let name = e.target.name;
        const arr = name.split(/[.[\]]/);
        let splitName = name.split('.');
        let index = arr[1];
        let state = arr[0];
        let stateProp = splitName[1];
        let copyArray = [...this.state.experience]; //a copy of state array
        //update the state inside the array
        copyArray[index] = { ...copyArray[index], [`${stateProp}`]: e.target.value }
        //replace the array of objects state with the updated one
        this.setState({
            [`${state}`]: copyArray
        })
    }
    render() {
        const { label, toggleVisibility, id } = this.props;
        const langs = this.state.langs;
        const iteratorComponent2 = <IteratorComponent2 valInfo="skills" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj} />
        //const iterableSkillLevel = 
        const iterableComponent = langs.map((l, index) => {
            return (
                <div className="lang-wrapper">
                    <p className={`lang-name`}>{l.lang}<span>{`| ${l.levelInWords}`}</span></p>
                    <div className="parallelogram-bar">
                        <div className={`parallelogram${index}-shape`}></div>
                    </div>
                </div>

            );
        })
        return (
            <div className="skills-container" id={id}>
                <p className="skill-headers">{label}</p>
                {iterableComponent}
                {toggleVisibility ? iteratorComponent2 : null}
            </div>
        );
    }
}

export default Langs;