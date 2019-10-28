import React from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getNewData = this.getNewData.bind(this)
    this.state = {
      character : "Homer",
      quote : "test",
      image : ""
    }
  }

  getNewData () {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
     .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image
      }
      )
  })
  }

  render() {
    return (
      <figure className="QuoteCard">
      <img src={this.state.image} alt={this.state.character} />
      <figcaption>
        <blockquote>{this.state.quote}</blockquote>
        <p>
          <cite>{this.state.character}</cite>
        </p>
        <button type="button" className="randomButton" onClick={this.getNewData} >Change the card</button>

      </figcaption>
    </figure>  
  )
  }
}

export default App;
