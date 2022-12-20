import { useState, useEffect } from "react";
import Shape from "./shapes";
import "./style.css";

function App() {
  const shapes = ["plus", "slash", "circle", "diamond", "square"];
  const colors = ["red", "blue", "white", "orange", "green"];

  // Initial state
  function generateRandomShape() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return <Shape shape={randomShape} color={randomColor} />;
  }

  const [randomShapeColor, setRandomShapeColor] = useState(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id) => ({
      id: id,
      shape: generateRandomShape(),
      clicked: false,
    }))
  );

  //Score
  const [score, setScore] = useState(0);

  useEffect(() => console.log(randomShapeColor), [randomShapeColor]);

  //Description

  const [description, setDescription] = useState(
    randomShapeColor[Math.floor(Math.random() * randomShapeColor.length)].shape
      .props
  );

  //Clicked
  const handleClick = (id) => {
    const copyOfRandomShapeColor = [...randomShapeColor];
    copyOfRandomShapeColor[id].clicked = true;
    setRandomShapeColor(copyOfRandomShapeColor);
    copyOfRandomShapeColor[id].shape.props.shape === description.shape &&
    copyOfRandomShapeColor[id].shape.props.color === description.color
      ? setScore(score + 10)
      : setScore(score - 10);
    console.log(randomShapeColor);
  };

  return (
    <>
      <h1 className="title">Let's play Color Shape Clicker!</h1>
      <div className="container">
        <div className="flex">
          <p className="description">
            Click all{" "}
            <span
              style={{
                color: description.color,
              }}
            >
              {description.color}
            </span>{" "}
            {description.shape}
          </p>
          <p className="score">Score: {score} Pts</p>
        </div>

        <div className="items-container">
          {randomShapeColor.map((item) => {
            return (
              <div
                key={item.id}
                className={`item ${item.clicked && "clicked"}`}
                onClick={() => handleClick(item.id)}
              >
                {item.shape}
              </div>
            );
          })}
        </div>
        <div className="time-left-bar">
          <div className="time-left-filled"></div>
        </div>
        <div className="time-left">Time left: 9 sec</div>
      </div>
    </>
  );
}

export default App;

// const hi = "hi"
// hi = "bye" // not ok

// const arr = [1,2,3,4]
// arr.push(6) // ok
// arr[3] = 8 // ok
// arr = [3,54,6,67] // not ok

// const a = [1,2,3,4,5]
// const b = [...a] //b == [1,2,3,4,5]
//  b[3] = "hello"
//  console.log(b) -> [1,2,3,"hello",5]
