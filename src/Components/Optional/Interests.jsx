import React from 'react';
import { Placeholders } from '../Form/Placeholders';
import Textarea from '../Form/Textarea_helpers';
import { IteratorComponent } from '../Form/iterator';

class Interests extends React.Component {
    constructor(props) {
        super(props);
        //default values to use
        this.state = {
            interests: [{
                interest: '[Insert your interests here e.g. Music, Video games, Coding, Philosopical discussions,  etc.]'
            }]
        }
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
        this.addNewStateObj = this.addNewStateObj.bind(this);
        this.rmvLatestStateObj = this.rmvLatestStateObj.bind(this);
    }
    //A seperate field change handler that updates the state 
    //with array of obj property after onChange event
    handleFieldChangeWithObj(e) {
        let name = e.target.name;
        const arr = name.split(/[.[\]]/);
        const splitName = name.split('.');
        let index = arr[1];
        let state = arr[0];
        let stateProp = splitName[1];
        let copyArray = [...this.state.interests]; //a copy of state array
        //update the state inside the array
        copyArray[index] = { ...copyArray[index], [`${stateProp}`]: e.target.value }
        //replace the array of objects state with the updated one
        this.setState({
            [`${state}`]: copyArray
        })
    }
        //add new state obj
        addNewStateObj(e) {
            e.preventDefault();
            this.setState(prevState => ({
                //default names and values for newly fresh states
                interests: [...prevState.interests, {
                    [`interest`]: '',
                }]
            }))
        }
    
        rmvLatestStateObj(e) {
            e.preventDefault();
            //remove the last item from the array of state objects
            this.state.interests.splice(this.state.interests.length - 1, 1);
            this.setState(this.state) //forces to rerender the component
        }
    render() {
        const { toggleVisibility } = this.props;
        const interests = this.state.interests;
        const iteratorComponent = <IteratorComponent valInfo="interests" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj} />
        const iterableComponent = interests.map((interest, i) => {
            const id = i + 1;
            if(!toggleVisibility){
                return(
                    <p key={0 - id} class="interest-para">{interest.interest}</p>
                );
            } else {

            }
            return (
                <div key={id} id={`interest-info${id}`}>
                    <Textarea 
                        t="text"
                        id={`interest-info${id}`}
                        cn="interest-info"
                        name={`interests[${i}].interest`}
                        val={interest.interest}
                        ph={Placeholders.interests[0]}
                        onChange={this.handleFieldChangeWithObj}
                    />
                </div>
            );
        })
        return (
            <div id={`interests-container`} className="main-containers" >
                <p className="exp-header-texts">Interests</p>
                {iterableComponent}

                {/* add and remove iterable component */}
                {toggleVisibility ? iteratorComponent : null}
            </div >
        );
    }
}

export default Interests;