import React from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getNewData = this.getNewData.bind(this)
    this.state = {
      character : null,
      quote : null,
      image : null
    }
  }

  componentDidMount() {
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
      <div>
      <Navbar/>
      <figure className="QuoteCard">
               
            {this.state.character ? <section>
                                    
                                      <img src={this.state.image} alt={this.state.character} />                                      
                                      <figcaption>                                      
                                        <blockquote>{this.state.quote}</blockquote>                                          
                                            <p>
                                            <cite>{this.state.character}</cite>
                                          </p>
                                      </figcaption> 
                                    </section>                                                                                             
                                  : <p>Loading data, please wait</p>                             
            }
              <button type="button" className="randomButton" onClick={this.getNewData} >Change the card</button>
        </figure> 
      </div>
  )
  }
}

export default App;
