import { useState, useEffect, useRef } from "react";
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
  useEffect(() => console.log(randomShapeColor), [randomShapeColor]); //Question: What is this?

  //Number Of Correct Clicked
  const [numberOfCorrectClicked, setNumberOfCorrectClicked] = useState(0);

  //Description
  const [description, setDescription] = useState(
    randomShapeColor[Math.floor(Math.random() * randomShapeColor.length)].shape
      .props
  );

  //Check elements which have color&shape that description says from randomShapeColor-Array
  const allYouWantToClick = randomShapeColor.filter(
    (i) =>
      i.shape.props.shape === description.shape &&
      i.shape.props.color === description.color
  );

  const numberOfCorrectAnswer = allYouWantToClick.length;
  console.log(numberOfCorrectAnswer);

  //Clicked
  const handleClick = (id) => {
    const copyOfRandomShapeColor = [...randomShapeColor];

    //Score up&down
    copyOfRandomShapeColor[id].shape.props.shape === description.shape &&
    copyOfRandomShapeColor[id].shape.props.color === description.color
      ? setScore(score + 10)
      : setScore(score - 10);
    // console.log(randomShapeColor);

    //Check
    //1.if not clicked 2. if clicked correct shape 3.if clicked correct color
    if (
      copyOfRandomShapeColor[id].clicked === false &&
      copyOfRandomShapeColor[id].shape.props.shape === description.shape &&
      copyOfRandomShapeColor[id].shape.props.color === description.color
    ) {
      if (numberOfCorrectClicked + 1 == numberOfCorrectAnswer) {
        nextGame();
        return; //function is over here
      }
      setNumberOfCorrectClicked(numberOfCorrectClicked + 1);
    }

    //Click ⇒ clicked = true;
    copyOfRandomShapeColor[id].clicked = true;
    setRandomShapeColor(copyOfRandomShapeColor);
  };

  //Time left
  const [timeLeft, setTimeLeft] = useState(10);
  const timeLeftRef = useRef(10);

  useEffect(() => {
    let countdown;
    countdown = setInterval(() => {
      setTimeLeft((t) => t - 1);
      timeLeftRef.current = timeLeftRef.current - 1;
      // console.log(timeLeftRef.current);
      const percent = (timeLeftRef.current / 10) * 100;
      document.querySelector(".time-left-filled").style.width = `${percent}%`;

      if (timeLeftRef.current <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }, []);

  //nextGame function
  const nextGame = () => {
    //reset timeLeft
    setTimeLeft(10);
    timeLeftRef.current = 10;

    //reset randomShapeColor
    const newRandomShapeColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      (id) => ({
        id: id,
        shape: generateRandomShape(),
        clicked: false,
      })
    );
    setRandomShapeColor(newRandomShapeColor);

    //reset description
    setDescription(
      newRandomShapeColor[Math.floor(Math.random() * randomShapeColor.length)]
        .shape.props
    );

    //reset setNumberOfCorrectClicked
    setNumberOfCorrectClicked(0);
  };

  //resetGame function ★★
  //1.When it get 100 modal open
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (score >= 100) {
      console.log("100てん");
      setShowModal((preClick) => !preClick);
    }
  }, [score]);
  //2.Closed Modal
  const resetGame = () => {
    setShowModal((preClick) => !preClick);
  };

  //Markup
  return (
    <>
      {showModal ? (
        <div className="modal_background">
          <div className="modal_wrapper">
            <h2 className="modal_text">🎉GAME CLEAR🎉</h2>
            <button className="modal_btn" onClick={resetGame}>
              🎮START AGAIN🎮
            </button>
          </div>
        </div>
      ) : null}
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
          <p className="score">
            Score:<span className="score-num">{score}</span> Pts
          </p>
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
        <div className="time-left">Time left: {timeLeft} sec</div>
      </div>
    </>
  );
}

export default App;

// Question: how to uploar whick a mole on github

// Want to do //
// When everything is clicked "Correct! pop up" and "Reset button" show up
//
