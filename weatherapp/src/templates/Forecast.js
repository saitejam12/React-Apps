import React from "react";
import "../components/currentweather.css";
import axios from "axios";

const appkey = "545f13f841ca097329540c0a1d23bb0e";
const units = "imperial";
class Forecast extends React.Component {
  handleClick = event => {
    event.preventDefault();
    const inp = event.target.name.value;
    console.log(inp);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inp}&units=${units}&appid=${appkey}`
      )
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return <div />;
  }
}
export default Forecast;
//city={this.props.city}
