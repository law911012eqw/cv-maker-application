import React from 'react';
import { Placeholders } from '../Form/Placeholders';
import Input from '../Form/Input_helpers';
import Textarea from '../Form/Textarea_helpers';
import { IteratorComponent } from '../Form/iterator';

class Certificates extends React.Component {
    constructor(props) {
        super(props);
        //default values to use
        this.state = {
            certificates: [{
                date: '2017-19',
                name: '[Enter your certifications in this textarea along with the following date to the side]'
            }]
        }
        this.handleFieldChangeWithObj = this.handleFieldChangeWithObj.bind(this);
        this.addNewStateObj = this.addNewStateObj.bind(this);
        this.rmvLatestStateObj = this.rmvLatestStateObj.bind(this);
    }

    handleFieldChangeWithObj(e) {
        let name = e.target.name;
        const arr = name.split(/[.[\]]/);
        const splitName = name.split('.');
        let index = arr[1];
        let state = arr[0];
        let stateProp = splitName[1];
        let copyArray = [...this.state.certificates]; //a copy of state array
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
                certificates: [...prevState.certificates, {
                    [`date`]: '',
                    [`name`]: '',
                }]
            }))
        }
    
        rmvLatestStateObj(e) {
            e.preventDefault();
            //remove the last item from the array of state objects
            this.state.certificates.splice(this.state.certificates.length - 1, 1);
            this.setState(this.state) //forces to rerender the component
        }
    render() {
        const { toggleVisibility } = this.props;
        const certificates = this.state.certificates;
        const iteratorComponent = <IteratorComponent valInfo="work experiences" onAdd={this.addNewStateObj} onRmv={this.rmvLatestStateObj} />
        const iterableComponent = certificates.map((c, i) => {
            this.props.componentDidMount();
            const id = i + 1;
            console.log(c);
            return (
                <div key={id} id={`certificate-info${id}`}>
                    <Input
                        t="Text"
                        id={`cer-date${id}`}
                        cn="cer-dates"
                        name={`certificates[${i}].date`}
                        val={c.date}
                        ph={Placeholders.certificates.date}
                        onChange={this.handleFieldChangeWithObj}
                    />
                    <Textarea 
                        t="text"
                        id={`cer-info${id}`}
                        cn="cer-info"
                        name={`certificates[${i}].name`}
                        val={c.name}
                        ph={Placeholders.certificates.name}
                        onChange={this.handleFieldChangeWithObj}
                    />
                </div>
            );
        })
        return (
            <div id={`certificates-container`} className="main-containers" >
                <p class="exp-header-texts">Certificates</p>
                {iterableComponent}

                {/* add and remove iterable component */}
                {toggleVisibility ? iteratorComponent : null}
            </div >
        );
    }
}

export default Certificates;