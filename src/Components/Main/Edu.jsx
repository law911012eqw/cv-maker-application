import React from 'react';
import { Placeholders } from '../Form/Placeholders';
import Input from '../Form/Input_helpers';
import { IteratorComponent } from '../Form/iterator'

class Edu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 1,
            education: [{
                yearStart1: 2020,
                yearEnd1: 'present',
                schoolName1: 'University of North Carolina at Chapel Hill',
                schoolTitle1: 'Major in Psychology'
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
        const arr = name.split(/[.[\]]/);
        const splitName = name.split('.');
        let index = arr[1];
        let state = arr[0];
        let stateProp = splitName[1];
        let copyArray = [...this.state.education]; //a copy of state array
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
        const len = this.state.education.length;
        this.setState(prevState => ({
            //default names and values for newly fresh states
            education: [...prevState.education, {
                [`yearStart${len + 1}`]: '',
                [`yearEnd${len + 1}`]: '',
                [`schoolName${len + 1}`]: '',
                [`schoolTitle${len + 1}`]: '',
            }]
        }))
    }

    rmvLatestStateObj(e) {
        e.preventDefault();
        //remove the last item from the array of state objects
        this.state.education.splice(this.state.education.length - 1, 1);
        this.setState(this.state) //forces to rerender the component
    }

    render() {
        const { toggleVisibility } = this.props;
        const education = this.state.education;
        const iteratorComponent = <IteratorComponent valInfo="Education" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj}/>;
        let iterableComponent = education.map((edu, index) => {
            let id = index+1;
            return (
                <div key={id} id={`edu-info${id}`} className="exp-info">
                    <div id={`edu-dates${id}`} className="exp-dates">
                        <Input
                            t="Text"
                            id={`edu-start-year${id}`}
                            cn="exp-start-year"
                            name={`education[${index}].yearStart${id}`}
                            val={edu.[`yearStart${id}`]}
                            ph={Placeholders.education[0].yearStart}
                            onChange={this.handleFieldChangeWithObj}
                        />
                        <p>-</p>
                        <Input
                            t="Text"
                            id={`edu-end-year${id}`}
                            cn="exp-end-year"
                            name={`education[${index}].yearEnd${id}`}
                            val={edu.[`yearEnd${id}`]}
                            ph={Placeholders.education[0].yearEnd}
                            onChange={this.handleFieldChangeWithObj}
                        />
                    </div>
                    <Input
                        t="Text"
                        id={`edu-name${id}`}
                        cn="exp-name"
                        name={`education[${index}].schoolName${id}`}
                        val={edu.[`schoolName${id}`]}
                        ph={Placeholders.education[0].schoolName}
                        onChange={this.handleFieldChangeWithObj}
                    />
                    <Input
                        t="Text"
                        id={`edu-position${id}`}
                        cn="exp-position"
                        name={`education[${index}].schoolTitle${id}`}
                        val={edu.[`schoolTitle${id}`]}
                        ph={Placeholders.education[0].schoolTitle}
                        onChange={this.handleFieldChangeWithObj}
                    />
                </div>
            );

        })
        return (
            <div id={`edu-container`} className="main-containers" >
                <p class="exp-header-texts">Education</p>
                {iterableComponent}
                {/* add and remove iterable component */}
                {toggleVisibility ? iteratorComponent : null} 
            </div >
        );
    }
}

export default Edu;