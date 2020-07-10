import React from 'react'
import { vocabulary } from './words'
import './App.css'

var sample = require('lodash/sample');

class App extends React.Component {
  state = { sentence: '' }

  static buildSentence(){
    const { beginning, followup, subjects, adjectives, verbs, adverbs, ends } = vocabulary;
    return sample(beginning) + ", " + sample(followup) + " " + sample(subjects) + " " + sample(adjectives) + " qui m'a " + sample(verbs) + " " + sample(adverbs) + ", " + sample(ends) + "."
  }

  componentDidMount(){
    this.getSentence();
  }

  getSentence(){
    var sentence = App.buildSentence();
    this.setState({ sentence: sentence });
  }

  render() {
    const { sentence } = this.state;
    return (
        <div>
        <div className="app">
        <h1>ALBERTRON</h1>
        <div className="card">
          <h2>{sentence}</h2>
          <button className="button" onClick={e => this.getSentence()}>
            <span><h4>More of Albert</h4></span>
          </button>
        </div>
      </div>
      <footer>
        <div className="footer">
          No rights reserved.
        </div>
      </footer>
      </div>
    );
  }
}

export default App