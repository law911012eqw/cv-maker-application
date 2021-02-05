import React from 'react';
import { Placeholders } from '../Form/attr_helpers';
import Input from '../Form/Input_helpers';
import Textarea from '../Form/Textarea_helpers';

class Edu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 1,
            experience: [{
                yearStart: 2019,
                yearEnd: 'present',
                companyName: 'College',
                companyPos: 'Computer Programmer',
                textNum: 1,
                importantNotes: ['Enter important finished tasks, achievement and projects that may be beneficial']
            }]
        }
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
    }

    //A seperate field change handler that updates the state with obj property onChange
    handleFieldChangeWithObj(e) {
        let name = e.target.name;
        let splitName = name.split('.');
        let state = splitName[0];
        let stateProp = splitName[1];
        this.setState(prevState => ({
            [`${state}`]: {
                ...prevState.state,
                [`${stateProp}`]: e.target.value,
            }
        }))
    }
    render() {
        const { index } = this.props;
        return (
            <div id="exp-container" className="main-containers">
                <p>Work Experiences</p>
                <div id="exp-info" className="exp-info">
                    <div id="exp-dates" className="exp-dates">
                        <Input
                            t="Text"
                            id="exp-start-year"
                            cn="exp-start-year"
                            name=""
                            ph={Placeholders.experiences[0].yearStart}
                            onChange={this.handleFieldChange}
                        />
                        <p>-</p>
                        <Input
                            t="Text"
                            id="exp-end-year"
                            cn="exp-end-year"
                            name=""
                            ph={Placeholders.experiences[0].yearEnd}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <Input
                        t="Text"
                        id="exp-name"
                        cn="exp-name"
                        name=""
                        ph={Placeholders.experiences[0].name}
                        onChange={this.handleFieldChange}
                    />
                    <Input
                        t="Text"
                        id="exp-position"
                        cn="exp-position"
                        name=""
                        ph={Placeholders.experiences[0].position}
                        onChange={this.handleFieldChange}
                    />
                    <Textarea
                        t="Text"
                        id={`exp-task${this.state.num}`}
                        cn="exp-important-notes" name=""
                        ph={Placeholders.experiences[0].achievements}
                        onChange={this.handleFieldChangeWithObj}
                    />
                </div>
            </div>
        );
    }
}

export default Edu;