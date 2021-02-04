import React from 'react';

// Components of the app
//import Form from './Components/Form/FormInputs';

import Profile from './Components/Main/Profile';
import Edu from './Components/Main/Edu';
import Work from './Components/Main/Work';
//import Others from './Components/Optional/Skills';
import Input from './Components/Form/Input_helpers';
import './Styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate() {
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
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }));
  }

  render() {
    let conditionalRender = this.state.editMode;
    let displayDOM;
    console.log(this.state.editMode);
    if (conditionalRender) {
      displayDOM = (
        <form autocomplete="off">
          <Profile />
          <Edu />
          <Work />
          <Input t="submit" val="Edit" onSubmit={this.handleSubmit} />
        </form>
      );
    } else {
      displayDOM = (
        <form>
          <fieldset disabled="disabled">
            <Profile />
            <Edu />
            <Work />
            <Input t="submit" val="Edit" onSubmit={this.handleSubmit} />
          </fieldset>
        </form>
      );
    }
    return (
      <div>
        {displayDOM}
      </div>
    );
  }
}

export default App;
