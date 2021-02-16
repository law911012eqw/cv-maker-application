import React, { useState, useEffect, useRef } from 'react';

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

  const isInitialMount = useRef(true);
  useEffect(() => {
    //load this useEffect at DOM mount and dom update
    if (isInitialMount.current) {
      autoresizeTextarea();
      isInitialMount.current = false;
    } else {
      autoresizeTextarea();
    }

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
    <div>
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
        <div id="buttons-section">
          <Input t="submit" id="toggle-save" val={buttonText} />
        </div>
      </form>
      <Options />
    </div>
  );
}

export default App;
