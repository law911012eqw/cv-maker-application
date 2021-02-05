import React from 'react';
import { Placeholders } from '../Form/attr_helpers';
import Input from '../Form/Input_helpers';
import { AppendComponent } from '../Form/append_info'

class Edu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 1,
            education: [{
                yearStart1: 2019,
                yearEnd1: 'present',
                schoolName1: 'College',
                schoolTitle1: 'Computer Programmer'
            }],
            arr: [this.props.education],
        }
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
        this.addNewStates = this.addNewStates.bind(this);
    }
    //A seperate field change handler that updates the state with obj property onChange
    handleFieldChangeWithObj(e) {
        let name = e.target.name;
        let arr = name.split(/[.\[\]]/);
        let index = arr[1];
        let splitName = name.split('.');
        let state = arr[0];
        let stateProp = splitName[1];
        this.setState(prevState => ({
            [`${state}`]: {
                ...prevState.state,
                [`${stateProp}`]: e.target.value,
            }
        }))
        console.log(arr);
        console.log(this.state.education);
    }

    addNewStates() {
        const len = this.state.education.length;
        this.setState(prevState => ({
            education: [...prevState.education, {
                [`yearStart${len+1}`]: '',
                [`yearEnd${len+1}`]: '',
                [`schoolName${len+1}`]: '',
                [`schoolTitle${len+1}`]: '',
            }]
        }))
        console.log(this.state.education);
    }
    render() {
        const { index } = this.props;
        const i = index;
        // let iterableComponent = [];
        // const id = this.state.education.length;
        return (
            <div id={`edu-container${i}`} className="main-containers" >
                <p>Education</p>
                education.map(() => {
                    
                })
                    <div id={`edu-info${index}`} className="exp-info">
                        <div id={`edu-dates${index}`} className="exp-dates">
                            <Input
                                t="Text"
                                id={`edu-start-year${i}`}
                                cn="exp-start-year"
                                name={`education[${i - 1}].yearStart${i}`}
                                val={`${this.state.education[i-1].yearStart}${i}`}
                                ph={Placeholders.education[0].yearStart}
                                onChange={this.handleFieldChangeWithObj}
                            />
                            <p>-</p>
                            <Input
                                t="Text"
                                id={`edu-end-year${i}`}
                                cn="exp-end-year"
                                name={`education[${i - 1}].yearStart`}
                                val={`${this.state.education[i - 1].yearEnd}${i}`}
                                ph={Placeholders.education[0].yearEnd}
                                onChange={this.handleFieldChangeWithObj}
                            />
                        </div>
                        <Input
                            t="Text"
                            id={`edu-name${i}`}
                            cn="exp-name"
                            name={`education[${i - 1}].schoolName`}
                            val={this.state.education[i - 1].schoolName}
                            ph={Placeholders.education[0].schoolName}
                            onChange={this.handleFieldChangeWithObj}
                        />
                        <Input
                            t="Text"
                            id={`edu-position${i}`}
                            cn="exp-position"
                            name={`education[${i - 1}].schoolTitle`}
                            val={this.state.education[i - 1].schoolTitle}
                            ph={Placeholders.education[0].schoolTitle}
                            onChange={this.handleFieldChangeWithObj}
                        />
                    </div>
                <AppendComponent valInfo="Education" onClick={this.addNewStates} />
            </div >
        );
    }
}

export default Edu;

// <div id={`edu-container${i}`} className="main-containers">
//     <p>Education</p>
//     <div id={`edu-info${i}`} className="exp-info">
//         <div id={`edu-dates${i}`} className="exp-dates">
//             <Input
//                 t="Text"
//                 id={`edu-start-year${i}`}
//                 cn="exp-start-year"
//                 name={`education.[${i - 1}].yearStart${i}`}
//                 val={`${this.state.education.[i - 1).yearStart}${i}`}
//                 ph={Placeholders.education[0].yearStart}
//                 onChange={this.handleFieldChangeWithObj}
//             />
//             <p>-</p>
//             <Input
//                 t="Text"
//                 id={`edu-end-year${i}`}
//                 cn="exp-end-year"
//                 name={`education.[${i - 1}].yearStart`}
//                 val={this.state.education.[i - 1].yearEnd}
//                 ph={Placeholders.education[0].yearEnd}
//                 onChange={this.handleFieldChangeWithObj}
//             />
//         </div>
//         <Input
//             t="Text"
//             id={`edu-name${i}`}
//             cn="exp-name"
//             name={`education.[${i - 1}].schoolName`}
//             val={this.state.education.[i - 1].schoolName}
//             ph={Placeholders.education[0].schoolName}
//             onChange={this.handleFieldChangeWithObj}
//         />
//         <Input
//             t="Text"
//             id={`edu-position${i}`}
//             cn="exp-position"
//             name={`education.[${i - 1}].schoolTitle`}
//             val={this.state.education.[i - 1].schoolTitle}
//             ph={Placeholders.education[0].schoolTitle}
//             onChange={this.handleFieldChangeWithObj}
//         />
//     </div>
// </div>