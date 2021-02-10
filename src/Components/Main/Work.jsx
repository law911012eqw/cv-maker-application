import React from 'react';
import { Placeholders } from '../Form/Placeholders';
import Input from '../Form/Input_helpers';
import Textarea from '../Form/Textarea_helpers';
import { IteratorComponent, IteratorComponent2 } from '../Form/iterator';
import { v4 as uuidv4 } from 'uuid';

class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: [{
                yearStart1: 2019,
                yearEnd1: 'present',
                companyName1: 'No Name Company From Somewhere',
                companyPos1: 'Computer Programmer',
                note: ['Enter important finished tasks, achievement and projects that may be beneficial for your professional credentials','as','d']
            }]
        }
        //bind methods to this
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
        this.addNewStateObj = this.addNewStateObj.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.rmvLatestStateObj = this.rmvLatestStateObj.bind(this);
        this.rmvLatestNote = this.rmvLatestNote.bind(this);
        this.indexIsolator = this.indexIsolator.bind(this);
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
        copyArray[index] = { ...copyArray[index], [`${stateProp}`]: e.target.value }
        //replace the array of objects state with the updated one
        this.setState({
            [`${state}`]: copyArray
        })
        console.log(stateProp, state);
    }
    // handleFieldChangeWithArrinArr(e) {

    // }
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
                [`note`]: '',
            }]
        }))
    }
    addNewNote(e) {
        e.preventDefault();
        const index = this.indexIsolator(e);
        const newNote = this.state.experience[index].note.concat('');
        //const note = [...this.state.experience[index].note];
        this.setState({
            ...this.state,
            experience: [{
                ...this.state.experience,
                note: [
                    ...this.state.experience[index].note,
                    newNote
                ]
            }]
        });
        // let copyArray = [...this.state.experience]; //a copy of state array
        // //update the state inside the array
        // copyArray[index] = { ...copyArray[index], [`${stateProp}`]: e.target.value }
        // //replace the array of objects state with the updated one
        // this.setState({
        //     [`${state}`]: copyArray
        // })
        console.log(this.state.experience[index].note)
        this.setState(this.state); //forces to rerender the component
    }
    rmvLatestStateObj(e) {
        e.preventDefault();
        //remove the last item from the array of state objects
        this.state.experience.splice(this.state.experience.length - 1, 1);
        this.setState(this.state) //forces to rerender the component
    }
    rmvLatestNote(e) {
        e.preventDefault();
        const index = this.indexIsolator(e);
        this.state.experience[index].note.splice(this.state.experience[index].note.length - 1, 1);
        this.setState(this.state); //forces to rerender the component
    }
    indexIsolator(e) {
        const id = e.target.id;
        //isolating the index from the id
        let index = id.split("").filter(function(val){
            return /^[\d]+$/.test(val);
        }).join("");
        return parseInt(index);
    }
    render() {
        const { toggleVisibility } = this.props;
        const iteratorComponent = <IteratorComponent valInfo="work experiences" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj} />
        let experience = this.state.experience;
        let iterableComponent = experience.map((exp, index) => {
            const id = index + 1;
            const notes = exp.note;
            console.log(notes);
            const iterableNotes = notes.map((note,i)=>{
                const idNote = i + 1;
                console.log(note);
                //It's either a textarea or a para based on the value of the boolean
                if(!toggleVisibility) {
                    return (
                        <p className="exp-notes-para">
                            {note}
                        </p>
                    );
                }
                return (
                    <Textarea
                        t="Text"
                        id={`exp${id}-task${idNote}`}
                        cn="exp-notes-ta"
                        name={`exp[${index}].note${index}[${i}]`}
                        val={note}
                        ph={Placeholders.experiences[0].achievements}
                        onChange={this.handleFieldChangeWithObj}
                    />
                );
            });
            return (
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
                        name={`experience[${index}].companyName${id}`}
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
                    {iterableNotes}
                    {toggleVisibility ? 
                    <IteratorComponent2 id={`noteManagement${index}`} valInfo="notes" onAdd={this.addNewNote} onRmv={this.rmvLatestNote}/> 
                    : null}
                </div>
            );
        })
        return (
            <div id="exp-container" className="main-containers">
                <p class="exp-header-texts">Work Experiences</p>
                {iterableComponent}
                {toggleVisibility ? iteratorComponent : null}
            </div>
        );
    }
}

export default Work;