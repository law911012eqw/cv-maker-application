import React from 'react';
import { Placeholders } from '../Form/attr_helpers';
import Input from '../Form/Input_helpers';

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
                emphasizedText: ['Enter important finished tasks, achievement and projects that may be beneficial']
            }]
        }
    }

    render() {
        return (
            <div id="exp-container">
                <p>Work Experiences</p>
                <div id="exp-info">
                    <div id="exp-dates">
                        <Input t="Text" id="exp-start-year" cn="cv-input" name="" ph={Placeholders.experiences[0].yearStart} />
                        <p>-</p>
                        <Input t="Text" id="exp-end-year" cn="cv-input" name="" ph={Placeholders.experiences[0].yearEnd} />
                    </div>
                    <Input t="Text" id="exp-company" cn="cv-input" name="" ph={Placeholders.experiences[0].name} />
                    <Input t="Text" id="exp-position" cn="cv-input" name="" ph={Placeholders.experiences[0].position} />
                    <Input t="Text" id={`exp-task${this.state.num}`} cn="cv-input" name="" ph={Placeholders.experiences[0].achievements} />
                    <button>+</button>
                </div>
            </div>
        );
    }
}

export default Edu;