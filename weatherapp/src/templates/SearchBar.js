import React from "react";
import "../components/search.css";

class SearchBar extends React.Component {
  state = {
    city: "",
    getCity: this.props.getCity
  };
  render() {
    return (
      <form onSubmit={this.state.getCity}>
        <input type="text" placeholder="City Name" name="searchcity" />
        <button>Search</button>
      </form>
    );
  }
}
export default SearchBar;
