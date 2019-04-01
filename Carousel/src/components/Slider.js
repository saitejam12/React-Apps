import React, { Component } from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slides from "./Slides";
import "./styles/slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0
    };
  }

  goToPrev = () => {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: this.state.images.length - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
    setTimeout(this.goToNext, 8000);
  };
  goToNext = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
    setTimeout(this.goToNext, 8000);
  };
  componentDidMount() {
    setTimeout(this.goToNext, 8000);
  }
  render() {
    return (
      <div className="slider-container">
        <LeftArrow goToPrev={this.goToPrev} />
        <div className="slider-wrapper">
          <Slides
            url={this.state.images[this.state.currentIndex]}
            transformed={this.transformed}
          />
        </div>
        <RightArrow goToNext={this.goToNext} />
      </div>
    );
  }
}
