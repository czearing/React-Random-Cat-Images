import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const images = Array.from({ length: 5 }).map((item, index) => {
  const width = 100 + Math.round(Math.random() * 200);
  const height = 100 + Math.round(Math.random() * 200);

  return {
    key: index,
    src: `https://placekitten.com/${width}/${height}`,
    width,
    height
  };
});

function App() {
  return (
    <div className="App">
      {images.map(image => (
        <img src={image.src} alt="" />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
