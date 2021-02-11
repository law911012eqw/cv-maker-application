import React from 'react'
import { IteratorLangs } from '../Form/iterator'

class Langs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            langNum: 0,
            langLevel: {
                1: 'Novice',
                2: 'Average',
                3: 'Intermediate',
                4: 'Proficient',
                5: 'Expert'
            },
            langs: [{
                lang: 'Tagalog',
                level: '4',
                levelInWords: 'Proficient'
            },
            {
                lang: 'English',
                level: '4',
                levelInWords: 'Proficient'
            }]
        }
        this.addLang = this.addLang.bind(this);
        this.rmvLang = this.rmvLang.bind(this);
        this.renderParallelogramShape = this.renderParallelogramShape.bind(this);
        this.indexIsolator = this.indexIsolator.bind(this);

    }
    addLang(e) {
        e.preventDefault();
        let lang = document.getElementById('lang-text-input').value;
        let level = document.getElementById('lang-lvl-options').value;
        let levelInteger = this.indexIsolator(level);
        let levelInWords = this.state.langLevel.[levelInteger];
        let newLang = Object.assign({}, {lang:lang, level:level, levelInWords:levelInWords});
        const updateLangs = this.state.langs.concat(newLang);
        this.setState({
            langs: updateLangs
        })
    }
    rmvLang(e){
        e.preventDefault();
        const id = e.target.id;
        const index = this.indexIsolator(id);
        this.state.langs.splice(index,1);
        this.setState(this.state);
    }

    //Iterate elements based on level that visualize progress-esque bar to visualize skill level
    renderParallelogramShape(id) {
        let level = [];
        for(let i=0; i < id; i++){
            level.push(<div className={`parallelogram-shape`}></div>)
        }
        return level;
    }
    indexIsolator(id) {
        //isolating the index from the id
        let index = id.split("").filter(function(val){
            return /^[\d]+$/.test(val);
        }).join("");
        return parseInt(index);
    }
    render() {
        const { label, toggleVisibility, id } = this.props;
        const langs = this.state.langs;
        const iteratorLangs = <IteratorLangs onSubmit={this.addLang} />
        //const iterableSkillLevel = 
        const iterableComponent = langs.map((l, index) => {
            return (
                <div key={index} className="lang-wrapper">
                    <div className="lang-name">
                        <p className="lang">{l.lang}<span>{`| ${l.levelInWords}`}</span></p>
                        <button id={`round-lang-btn${index}`} className="round-btn" onClick={this.rmvLang}>-</button>
                    </div>

                    <div className="parallelogram-bar">
                        {this.renderParallelogramShape(l.level)}
                    </div>
                </div>

            );
        })
        return (
            <div className="skills-container" id={id}>
                <p className="skill-headers">{label}</p>
                {iterableComponent}
                {toggleVisibility ? iteratorLangs : null}
            </div>
        );
    }
}

export default Langs;