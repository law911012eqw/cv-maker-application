import React from 'react';

//Components
import { Placeholders } from '../Form/attr_helpers';
import Input from '../Form/Input_helpers';
import Textarea from '../Form/Textarea_helpers';

//Extra Packages
//import autosize from 'autosize';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            name: 'Beaver Bryan Antipolo',
            title: 'Web Developer',
            email: 'law911012eqw@gmail.com',
            profile: '[Insert profile summary about yourself]',
            phone: '9191919191',
            location: [{
                address: '8888 Gallagher Rd., ',
                city: 'Jacksonville, ',
                state: 'NC',
                zip: '#####',
            }],
        });
        this.addDashes = this.addDashes.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // componentDidMount() {
    //     this.Textarea.focus();
    //     autosize(this.Textarea);
    // }

    handleChange(e) {
        this.setState = ({
            [e.target.name]: e.target.value,
        })
    }
    addDashes(f) {
        let f_val = f.value.replace(/\D[^\.]/g, "");
        f.value = f_val.slice(0, 3) + "-" + f_val.slice(3, 6) + "-" + f_val.slice(6);
    }
    render() {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.profile);
        console.log(this.state.phone);
        return (
            <div id="profile-container">
                <div id="profile-upper-left">
                    <div id="profile-user">
                        <Textarea
                            // ref={c=>this.textarea=c}
                            t="text"
                            id="profile-name"
                            cn="cv-input"
                            name="name"
                            spellcheck="false"
                            ph={Placeholders.name}
                            onChange={this.handleChange}
                        />
                        <Input
                            t="text"
                            id="profile-title"
                            cn="cv-input"
                            name="title"
                            ph={Placeholders.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Textarea
                            // ref={c=>this.textarea=c}
                            t="text"
                            id="profile-summary"
                            cn="cv-input"
                            name="profile"
                            ph={Placeholders.profile}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div id="profile-upper-right">
                    <label>Contacts Info</label>
                    <Input
                        t="number"
                        id="profile-phone"
                        cn="cv-input"
                        name="phone"
                        min='10'
                        max='10'
                        ph={Placeholders.phone}
                        onChange={this.handleChange}
                    />
                    <Input
                        t="email"
                        id="profile-email"
                        cn="cv-input"
                        name="email"
                        ph={Placeholders.email}
                        onChange={this.handleChange}
                    />
                    <Textarea
                        t="text"
                        id="profile-address"
                        cn="cv-input"
                        ph={`${Placeholders.location[0].address}`}
                    />
                    <Textarea
                        t="text"
                        id="profile-location"
                        cn="cv-input"
                        ph={`${Placeholders.location[0].city}${Placeholders.location[0].state}${Placeholders.location[0].zip}`}
                    />
                </div>
            </div>
        );
    }
}



export default Profile;