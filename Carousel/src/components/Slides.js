import React from "react";

const Slides = ({ url, transformed }) => {
  console.log(transformed);
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "700px",
    scrollDirection: "leftToRight",
    transform: `translateX(${transformed}px)`,
    transition: "background-image 1s ease-in-out"
  };

  return <div className="slide" style={styles} />;
};

export default Slides;
