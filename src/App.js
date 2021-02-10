import React from 'react';

// Components of the app
import Profile from './Components/Main/Profile';
import Edu from './Components/Main/Edu';
import Work from './Components/Main/Work';
import Certificates from './Components/Optional/Certificates';
import Interests from './Components/Optional/Interests';
import Skills from './Components/Optional/Skills';
import Options from './Components/Options/Options';
import Input from './Components/Form/Input_helpers';
import './Styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      val: 'Edit',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Invoked every initial render of component
  // Text area auto resize 
  componentDidMount() {
    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let { disabled } = this.state;
    disabled === true ? this.setState({ val: 'Save' }) : this.setState({ val: 'Edit' });
    this.setState(prevState => ({
      disabled: !prevState.disabled,
    }));
  }

  render() {
    return (
      <div>
        <form id="main-form" autoComplete="off">
          {/* if this is true the fieldset is enabled, otherwise it toggles to disable */}
          <fieldset disabled={this.state.disabled}>
            <Profile />
            <div id="main-section">
              <div id="experiences-section">
                <Edu toggleVisibility={!this.state.disabled} />
                <Work toggleVisibility={!this.state.disabled} />
                <Certificates toggleVisibility={!this.state.disabled} componentDidMount={this.componentDidMount}/>
                <Interests toggleVisibility={!this.state.disabled} componentDidMount={this.componentDidMount}/>
              </div>
              <div id="skills-section">
                <Skills label="Skills" toggleVisibility={!this.state.disabled}/>
                <Skills label="Languages" id="languages-container" toggleVisibility={!this.state.disabled}/>
              </div>
            </div>
          </fieldset>
          <Input t="submit" id="toggle-save" val={this.state.val} onSubmit={this.handleSubmit} />
        </form>
        <Options />
      </div>
    );
  }
}

export default App;
