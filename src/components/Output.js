import React from 'react';

const Output = props => {
  console.log(props.forecast);
  return(
    <div>
      <p className="weather__line">
        Temperature: 
        <span className="weather__info">{(props.forecast.temperature - 273).toPrecision(4)} Celsius</span>
      </p>
      <p className="weather__line">
        City: 
        <span className="weather__info">{props.forecast.city}</span>
      </p>
      <p className="weather__line">
        Country: 
        <span className="weather__info">{props.forecast.country}</span>
      </p>
      <p className="weather__line">
        Humidity:
        <span className="weather__info">{props.forecast.humidity}</span>
      </p>
      <p className="weather__line">
        Description
        <span className="weather__info">{props.forecast.description}</span>
      </p>
    </div>
  )
}

export default Output;