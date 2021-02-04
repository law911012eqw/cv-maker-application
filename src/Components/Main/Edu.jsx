import React from 'react';
import { Placeholders } from '../Form/attr_helpers';
import Input from '../Form/Input_helpers';

class Edu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 1,
            education: [{
                yearStart: 2019,
                yearEnd: 'present',
                schoolName: 'College',
                schoolTitle: 'Computer Programmer'
            }]
        }
    }

    render() {
        return (
            <div id="edu-container">
                <p>Education</p>
                <div id="edu-info">
                    <div id="edu-dates">
                        <Input t="Text" id="edu-start-year" cn="cv-input" name="" ph={Placeholders.education[0].yearStart} />
                        <p>-</p>
                        <Input t="Text" id="edu-end-year" cn="cv-input" name="" ph={Placeholders.education[0].yearEnd} />
                    </div>
                    <Input t="Text" id="edu-name" cn="cv-input" name="" ph={Placeholders.education[0].schoolName} />
                    <Input t="Text" id="edu-position" cn="cv-input" name="" ph={Placeholders.education[0].schoolTitle} />
                </div>
            </div>
        );
    }
}

export default Edu;