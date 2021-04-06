import React, { useState, useEffect } from 'react';

// Components of the app
import Profile from './Components/Main/Profile';
import Edu from './Components/Main/Edu';
import Work from './Components/Main/Work';
import Certificates from './Components/Optional/Certificates';
import Interests from './Components/Optional/Interests';
import Skills from './Components/Optional/Skills';
import Langs from './Components/Optional/Languages';
import Options from './Components/Options/Options';
import Input from './Components/Form/Input_helpers';

//scripts from other folders
import './Scripts/pdf';

//stylesheets
import './Styles/App.scss';

const App = () => {
  //useState on toggle form fieldset disability
  const [isDisabled, setIsDisabled] = useState(true);

  //side effects of former
  useEffect(() => {

    const toggleSave = document.getElementById('toggle-save');

    function toggleDisable(e) {
      e.preventDefault();
      setIsDisabled(!isDisabled);
    }

    toggleSave.onclick = (e) => {
      toggleDisable(e);
    }
  });

  //button text as a hook state
  const [buttonText, setButtonText] = useState('Edit');

  //side effects of the former --alternately toggling text on updates
  useEffect(() => {
    isDisabled === true ? setButtonText('Edit') : setButtonText('Save');
  }, [isDisabled])

  useEffect(() => {
    //load this useEffect at DOM mount and dom update
    autoresizeTextarea();
    
    function autoresizeTextarea() {
      const tx = document.getElementsByTagName('textarea');
      for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
      }
    }

    function OnInput() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    }
  })
  return (
    <div id="form-wrapper">
      <form id="main-form" autoComplete="off">
        {/* if this is true the fieldset is enabled, otherwise it toggles to disable */}
        <fieldset disabled={isDisabled}>
          <Profile />
          <div id="main-section">
            <div id="experiences-section">
              <Edu toggleVisibility={!isDisabled} />
              <Work toggleVisibility={!isDisabled} />
              <Certificates toggleVisibility={!isDisabled} />
              <Interests toggleVisibility={!isDisabled} />
            </div>
            <div id="skills-section">
              <Skills label="Skills" toggleVisibility={!isDisabled} />
              <Langs label="Languages" id="languages-container" toggleVisibility={!isDisabled} />
            </div>
          </div>
        </fieldset>
      </form>
      <Options />
      <div id="buttons-section">
          <Input t="submit" id="toggle-save" cn="toggle-save" val={buttonText} />
          <p id="note">Note: Resize the browser page until the entire cv page is visible to convert the entire page as pdf. Text auto resizes functionality is activated from save/edit toggle. </p>
          <button id="download" className="toggle-save">
            Download
            <i className="fas fa-download"></i>
          </button>
        </div>
    </div>
  );
}

export default App;
