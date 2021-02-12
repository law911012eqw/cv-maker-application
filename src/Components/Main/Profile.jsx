import React from 'react';

//Components
import { Placeholders } from '../Form/Placeholders';
import Input from '../Form/Input_helpers';
import Textarea from '../Form/Textarea_helpers';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            name: 'Reaver Nayrb Saboteur',
            title: 'Web Developer',
            email: 'law911012eqw@gmail.com',
            profile: `The purpose of this text is to confirm  whether the auto resize textarea 
            will work. Just making sure this paragraph will reach the third line 
            which now it is with the help of ES6 template string.`,
            phone: '(919)-191-9191',
            location: {
                address: '8888 Gallagher Rd., ',
                city: 'Jacksonville',
                state: ' NC',
                zip: ' 28546',
            },
        });

        //binding methods to this
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
    }

    //update state throughtout input onchange
    handleFieldChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    //A seperate field change handler that updates the state with obj property onChange
    handleFieldChangeWithObj(e) {
        let nameValue = e.target.name;

        //Splitting the value of the one line input by comma to assigned in on proper states
        if (!nameValue.includes('.')) {
            let val = e.target.value;
            let splitVal = val.split(',');
            this.setState(prevState => ({
                [`${nameValue}`]: {
                    ...prevState.[nameValue],
                    city: splitVal[0] || '',
                    state: splitVal[1] || '',
                    zip: splitVal[2] || ''
                }
            }))
        }
        //Setting state with new value
        //Only used for one property at a time
        else {
            let splitName = nameValue.split('.');
            let stateName = splitName[0];
            let stateProp = splitName[1];
            this.setState(prevState => ({
                [`${stateName}`]: {
                    ...prevState.[stateName],
                    [`${stateProp}`]: e.target.value
                }
            }))
        }
    }
    render() {
        return (
            <div id="profile-container">
                <div id="profile-upper-left">
                    <div id="profile-user">
                        <Textarea
                            t="text"
                            id="profile-name"
                            cn="cv-input"
                            name="name"
                            val={this.state.name}
                            ph={Placeholders.name}
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            t="text"
                            id="profile-title"
                            cn="cv-input"
                            name="title"
                            val={this.state.title}
                            ph={Placeholders.title}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div>
                        <Textarea
                            // ref={c=>this.textarea=c}
                            t="text"
                            id="profile-summary"
                            cn="cv-input"
                            name="profile"
                            val={this.state.profile}
                            ph={Placeholders.profile}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                </div>
                <div id="profile-upper-right">
                    <label>Contact Info</label>
                    <Input
                        t="text"
                        id="profile-phone"
                        cn="ci-inputs"
                        name="phone"
                        val={this.state.phone}
                        ph={Placeholders.phone}
                        onChange={this.handleFieldChange}
                    />
                    <Textarea
                        t="email"
                        id="profile-email"
                        cn="ci-inputs"
                        name="email"
                        val={this.state.email}
                        ph={Placeholders.email}
                        onChange={this.handleFieldChange}
                    />
                    <Textarea
                        t="text"
                        id="profile-address"
                        cn="ci-inputs"
                        name="location.address"
                        val={this.state.location.address}
                        ph={`${Placeholders.location[0].address}`}
                        onChange={this.handleFieldChangeWithObj}
                    />
                    <Textarea
                        t="text"
                        id="profile-location"
                        cn="ci-inputs"
                        name="location"
                        val={`${this.state.location.city},${this.state.location.state},${this.state.location.zip}`}
                        ph={`${Placeholders.location[0].city}${Placeholders.location[0].state}${Placeholders.location[0].zip}`}
                        onChange={this.handleFieldChangeWithObj}
                    />
                </div>
            </div>
        );
    }
}

export default Profile;