import React from 'react';

// Components of the app
//import Form from './Components/Form/FormInputs';

import Profile from './Components/Main/Profile';
import Edu from './Components/Main/Edu';
import Work from './Components/Main/Work';
import { AppendComponent } from './Components/Form/append_info'
//import Others from './Components/Optional/Skills';
import Input from './Components/Form/Input_helpers';
import './Styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      val: 'Edit',
      eduNum: 1,
      expNum: 1,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Invoked every component update
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
    let { editMode } = this.state;
    editMode === true ? this.setState({ val: 'Edit' }) : this.setState({ val: 'Save' });
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }));
  }

  render() {
    return (
      <div>
        <form autoComplete="off">
          {/* if this is true the fieldset is enabled, otherwise it toggles to disable */}
          {this.state.editMode === true ? (
            <fieldset>
              <Profile />
              <Edu index={this.state.eduNum}/>
              <Work />
            </fieldset>
          ) : (
              <fieldset disabled="none">
                <Profile />
                <Edu index={this.state.eduNum} />
                <Work />
              </fieldset>
            )}
          <Input t="submit" id ="toggle-save" val={this.state.val} onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default App;
