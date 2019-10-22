import React from 'react';
import InputForm from './InputForm';
import Output from './Output';

import '../App.css';

class App extends React.Component {
  
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: ""
  }

  _API_KEY = 'b44043df408bdf12fdfd493a348827e1'; 

  getData = async event => {
    const { city, country } = event.target.elements;
    event.preventDefault();
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.vlue}&APPID=b44043df408bdf12fdfd493a348827e1`);
    const data = await res.json();
    data.cod === "404" 
      ?
        this.setState({ error: data.message}) 
      : 
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description
        });
  }

  render(){
    console.log(this.state);
    return(
      <div className="ui container purple">
        <h1>Weather App</h1>
        <InputForm getData={this.getData} />

        {this.state.temperature && <Output forecast={this.state} />}
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
      </div>
    )
  }
};

export default App;
