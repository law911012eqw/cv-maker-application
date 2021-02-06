import React from 'react';
import { Placeholders } from '../Form/attr_helpers';
import Input from '../Form/Input_helpers';
import Textarea from '../Form/Textarea_helpers';
import { IteratorComponent } from '../Form/iterator'

class Edu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: [{
                yearStart1: 2019,
                yearEnd1: 'present',
                companyName1: 'No Name Company From Somewhere',
                companyPos1: 'Computer Programmer',
                importantNotes1: ['Enter important finished tasks, achievement and projects that may be beneficial']
            }]
        }
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
        this.addNewStateObj = this.addNewStateObj.bind(this);
        this.rmvLatestStateObj = this.rmvLatestStateObj.bind(this);
    }

    //A seperate field change handler that updates the state 
    //with array of obj property after onChange event
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

    //add new state obj
    addNewStateObj(e) {
        e.preventDefault();
        const len = this.state.experience.length;
        this.setState(prevState => ({
            //default names and values for newly fresh states
            experience: [...prevState.experience, {
                [`yearStart${len + 1}`]: '',
                [`yearEnd${len + 1}`]: '',
                [`companyName${len + 1}`]: '',
                [`companyPos${len + 1}`]: '',       
            }]
        }))
    }

    rmvLatestStateObj(e) {
        e.preventDefault();
        //remove the last item from the array of state objects
        this.state.experience.splice(this.state.experience.length - 1, 1);
        this.setState(this.state) //forces to rerender the component
    }
    render() {
        let experience = this.state.experience;
        console.log(experience);
        let iterableComponent = experience.map((exp, index) => {
            const id = index+1;
            return(
                <div key={id} id={`exp-info${id}`} className="exp-info">
                    <div id={`exp-dates${id}`} className="exp-dates">
                        <Input
                            t="Text"
                            id={`exp-start-year${id}`}
                            cn="exp-start-year"
                            name={`experience[${index}].yearStart${id}`}
                            val={exp.[`yearStart${id}`]}
                            ph={Placeholders.experiences[0].yearStart}
                            onChange={this.handleFieldChangeWithObj}
                        />
                        <p>-</p>
                        <Input
                            t="Text"
                            id={`exp-end-year${id}`}
                            cn="exp-end-year"
                            name={`experience[${index}].yearEnd${id}`}
                            val={exp.[`yearEnd${id}`]}
                            ph={Placeholders.experiences[0].yearEnd}
                            onChange={this.handleFieldChangeWithObj}
                        />
                    </div>
                    <Input
                        t="Text"
                        id={`exp-name${id}`}
                        cn="exp-name"
                        name={`experience[${index}].yearEnd${id}`}
                        val={exp.[`companyName${id}`]}
                        ph={Placeholders.experiences[0].name}
                        onChange={this.handleFieldChangeWithObj}
                    />
                    <Input
                        t="Text"
                        id={`exp-position${id}`}
                        cn="exp-position"
                        name={`experience[${index}].companyPos${id}`}
                        val={exp.[`companyPos${id}`]}
                        ph={Placeholders.experiences[0].position}
                        onChange={this.handleFieldChangeWithObj}
                    />
                    <Textarea
                        t="Text"
                        id={`exp-task${this.state.num}`}
                        cn="exp-important-notes" name=""
                        ph={Placeholders.experiences[0].achievements}
                        onChange={this.handleFieldChangeWithObjWithObj}
                    />
                    <IteratorComponent valInfo="work experiences" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj}/>
                </div>
            );
        })
        return (
            <div id="exp-container" className="main-containers">
                <p>Work Experiences</p>
                {iterableComponent}
                <IteratorComponent valInfo="work experiences" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj}/>
            </div>
        );
    }
}

export default Edu;