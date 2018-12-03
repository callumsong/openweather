import React, { Component } from 'react';
import axios from 'axios';
import currentTime from './util/util.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      weather: [], // the information from the API comes back as an array
      time: '',
    }
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1b0a7fc1a9a3cab87909363412eaad0c')
      .then((data) => {
        var {
          data:
          {
            name,
            weather,
          }
        } = data;
        this.setState({
          name: name,
          weather: weather,
        });
      });
      setInterval(() => {
        this.setState({
          time: currentTime(),
        })
      }, 1000);
  }
  render() {
    var { name, weather } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {name}
          </h1>
        </header>
        <h2>Weather Report</h2>
        <p>{currentTime()}</p>
        {weather.map((forecast) => (
          <span>
            <p>
              {forecast.main}
            </p>
            <img
              alt={forecast.description}
              src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
            />
          </span>
        ))}
      </div>
    );
  }
}

export default App;
