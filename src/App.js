import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './quotes.json';
// import styles from './twitter.module.css:';

var colorPalette = ["#f2476a","#fb654e","#eb2d3a","#add8e6","#90ee90","#861818","#867b18","#1b8618","#18867b","#321886"];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      author:"",
      color: colorPalette[0]
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  getRandomQuote = () => {
    var index = Math.floor(Math.random() * 3000);
    var colorIndex = Math.floor(Math.random() * 10);
    console.log("Color Index",colorIndex);

    this.setState({
      text:data[index].quoteText,
      author:data[index].quoteAuthor,
      color: colorPalette[colorIndex]
    });
  }
  componentDidMount(){
    this.getRandomQuote();
  }
  render() {
    return (
        <div id="body" className="app" style={{backgroundColor:this.state.color}}>
          <h1 style={{color:"white",padding:10}}>Random Quote Generator</h1>
          <h5 style={{color:"white",padding:10}} >Using React JS !</h5>
          <div id="quote-box" className="centered" >
            <div id="text" style={{color:this.state.color}}>
              {this.state.text}
            </div>
            <div id="author" style={{color:this.state.color}}>
              - {this.state.author}
            </div>
            <div id="button-section">
              <div id="tweet-section" style={{backgroundColor:this.state.color}}>
                <a style={{color:"white"}} href="http://www.twitter.com/intent/tweet" className="fa fa-twitter"></a>
              </div>
              <div id="new-quote" >
                <button style={{backgroundColor:this.state.color}} id="submit" onClick={this.getRandomQuote}>Next Quote</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
