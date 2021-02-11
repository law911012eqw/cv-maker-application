import React from 'react';
import Input from '../Form/Input_helpers';
class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            languages: true,
            certificates: true,
            interests: true
        }
        this.toggleSidebarVisibility = this.toggleSidebarVisibility.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    componentDidUpdate() {
        if (document.getElementById("tgl-input-languages").checked === false) {
            document.getElementById("languages-container").style.display = "none";
        } else { document.getElementById("languages-container").style.display = "block"; }
        if (document.getElementById("tgl-input-certificates").checked === false) {
            document.getElementById("certificates-container").style.display = "none";
        } else { document.getElementById("certificates-container").style.display = "block"; }
        if (document.getElementById("tgl-input-interests").checked === false) {
            document.getElementById("interests-container").style.display = "none";
        } else { document.getElementById("interests-container").style.display = "block"; }
        
    }
    handleCheckbox(event) {
        const target = event.target;
        const name = event.target.name;
        let value;
        target.checked ? value = true : value = false;
        this.setState({
            [name]: value,
        });
        console.log(event);
    }
    toggleSidebarVisibility() {
        const sidebar = document.getElementById('options-container');
        const button = document.getElementById('toggle-sidebar');
        sidebar.classList.toggle('move-to-right');
        button.classList.toggle('rotate-button');

    }
    render() {
        return (
            <div id="options-container" className="move-to-right">
                <button id="toggle-sidebar" className="rotate-button" onClick={this.toggleSidebarVisibility}>
                    <i className="bi bi-arrow-left-square-fill"></i>
                </button>
                <form id="sidebar-options">
                            <h2 id="toggle-options-text-wrapper">
                                <label id="toggle-options-text">{"Toggle Options"}</label>
                            </h2>
                            <div id="tgl-languages-wrapper" className="sidebar-toggle-wrappers">
                                <label>{"Toggle Languages: "}</label>
                                <Input
                                    t="checkbox"
                                    id="tgl-input-languages"
                                    name="languages"
                                    checked={this.state.languages}
                                    onChange={this.handleCheckbox}
                                />
                            </div>
                            <div id="tgl-certificates-wrapper" className="sidebar-toggle-wrappers">
                                <label>{"Toggle Certificates: "}</label>
                                <Input
                                    t="checkbox"
                                    id="tgl-input-certificates"
                                    name="certificates"
                                    checked={this.state.certificates}
                                    onChange={this.handleCheckbox}
                                />
                            </div>
                            <div id="tgl-interests-wrapper" className="sidebar-toggle-wrappers">
                                <label>{"Toggle Interests: "}</label>
                                <Input
                                    t="checkbox"
                                    id="tgl-input-interests"
                                    name="interests"
                                    checked={this.state.interests}
                                    onChange={this.handleCheckbox}
                                />
                            </div>
                        </form>
            </div>
        )
    }
}

export default Options;