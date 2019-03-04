import React from "react";
import "../components/currentweather.css";
import axios from "axios";

const appkey = "545f13f841ca097329540c0a1d23bb0e";
const units = "imperial";
class CurrentWeather extends React.Component {
  state = {
    city: "",
    country: "",
    temp: "",
    condition: "",
    wind: "",
    humidity: "",
    date: "",
    visibility: ""
  };

  handleClick = event => {
    event.preventDefault();
    const inp = event.target.name.value;
    console.log(inp);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${inp}&units=${units}&appid=${appkey}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          city: res.data.name,
          country: res.data.sys.country,
          temp: Math.floor(res.data.main.temp),
          condition: res.data.weather[0].description,
          wind: res.data.wind.speed,
          humidity: res.data.main.humidity,
          visibility: res.data.visibility / 1000
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input type="text" placeholder="City Name" id="name" />
          <button type="submit">Search</button>
        </form>
        <div className="weather">
          {this.state.city ? (
            <div id="cityName">
              {this.state.city},{this.state.country}
            </div>
          ) : (
            <div id="cityName" />
          )}
          {this.state.temp ? (
            <div id="temperature">{this.state.temp}&deg;F</div>
          ) : (
            <div id="temperature" />
          )}
          {this.state.condition ? (
            <div id="condition">{this.state.condition}</div>
          ) : (
            <div id="condition" />
          )}
          {this.state.wind ? (
            <div id="wind">Wind: {this.state.wind} mph</div>
          ) : (
            <div id="wind" />
          )}
          {this.state.humidity ? (
            <div id="humidity">Humidity:{this.state.humidity}</div>
          ) : (
            <div id="humidity" />
          )}
          {this.state.visibility ? (
            <div id="visibility">Visibility:{this.state.visibility} miles</div>
          ) : (
            <div id="visibility" />
          )}
        </div>
      </div>
    );
  }
}
export default CurrentWeather;
