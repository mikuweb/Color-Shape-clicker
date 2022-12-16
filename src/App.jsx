import { useState, useEffect } from "react";
import Shape from "./shapes";
import "./style.css";

function App() {
  const shapes = ["plus", "line", "circle", "diamond", "square"];
  const colors = ["pink", "blue", "white", "orange", "green"];

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

  useEffect(() => console.log(randomShapeColor), [randomShapeColor]);

  const handleClick = (id) => {
    const copyOfRandomShapeColor = [...randomShapeColor];
    copyOfRandomShapeColor[id].clicked = true;

    // const hi = "hi"
    // hi = "bye" // not ok

    // const arr = [1,2,3,4]
    // arr.push(6) // ok
    // arr[3] = 8 // ok
    // arr = [3,54,6,67] // not ok

    setRandomShapeColor(copyOfRandomShapeColor);

    // const a = [1,2,3,4,5]
    // const b = [...a] //b == [1,2,3,4,5]
    //  b[3] = "hello"
    //  console.log(b) -> [1,2,3,"hello",5]
  };

  return (
    <>
      <h1 className="title">Let's play Color Shape Clicker!</h1>
      <div className="container">
        <div className="flex">
          <p className="description">
            Click all <span>Orange</span> Circles
          </p>
          <p>Score: 100 Pts</p>
        </div>

        <div className="items-container">
          {randomShapeColor.map((item) => {
            return (
              <div
                key={item.id}
                className="item"
                onClick={() => handleClick(item.id)}
              >
                {item.shape}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

// {shape: "circle", color: "orange"}
// [{shape: "circle", color: "orange"}.{shape: "circle", color: "orange"}.{shape: "circle", color: "orange"}]
// useState

// {shape: "circle", color: "orange", clicked: false}

// map(): display

/* Question: How to display images? */
/* Question: You tought me this before, but I don't get it yet. Can you explain that again?
　handleClick
　It doesn’t work outside because you are not passing the index to it.
　If you want index to be known within the function  body you have pass it in there.
　When it’s inlined inside the callback
　then it is know because index is defined within the upper scope. */
