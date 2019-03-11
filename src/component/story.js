import React from "react";

class Details extends React.Component {
  state = {
    event: this.props.trigger
  };
  render() {
    return (
      <div>
        {this.props.trigger ? (
          <div>
            <li> Author: {this.props.stories.author}</li>
            <li> URL: {this.props.stories.url}</li>
            <li> Comments: {this.props.stories.num_comments} </li>
            <li> Points: {this.props.stories.points}</li>
            <li> ID: {this.props.stories.objectID}</li>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default class Story extends React.Component {
  state = {
    trigger: false,
    storyDetails: this.props.stories
  };
  handleClick = e => {
    this.setState({ trigger: true });
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            {" "}
            Title: {this.props.stories.title}{" "}
            <button onClick={this.handleClick}>Details</button>
          </li>
          <Details
            trigger={this.state.trigger}
            stories={this.state.storyDetails}
          />
        </ul>
        <hr />
      </div>
    );
  }
}
