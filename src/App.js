import React, { Component } from "react";
import Story from "./component/story";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.stories.map((story, key) => (
          <Story stories={story} key={key} />
        ))}
      </div>
    );
  }
}

export default App;
