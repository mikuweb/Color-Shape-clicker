export const Square = ({ color }) => {
  return (
    <div
      style={{
        display: "block",
        width: "40px",
        height: "40px",
        border: "3px solid",
        borderColor: color,
      }}
    />
  );
};

export const Diamond = ({ color }) => {
  return (
    <div
      style={{
        display: "block",
        transform: "rotate(45deg)",
        width: "40px",
        height: "40px",
        border: "3px solid",
        borderColor: color,
      }}
    />
  );
};

export const Circle = ({ color }) => {
  return (
    <div
      style={{
        display: "block",
        width: "40px",
        height: "40px",
        border: "3px solid",
        borderColor: color,
        borderRadius: "100px",
      }}
    />
  );
};

export const Line = ({ color }) => {
  return (
    <div
      style={{
        display: "block",
        width: "40px",
        height: "3px",
        transform: "rotate(-45deg)",
        backgroundColor: color,
      }}
    />
  );
};

export const Plus = ({ color }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "40px",
          height: "3px",
          transform: "translateX(-19px)",
          backgroundColor: color,
        }}
      />
      <div
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: "40px",
          transform: "translateY(-19px)",
          backgroundColor: color,
        }}
      />
    </div>
  );
};

const Shape = ({ color, shape }) => {
  if (shape === "plus") return <Plus color={color} />;
  if (shape === "line") return <Line color={color} />;
  if (shape === "circle") return <Circle color={color} />;
  if (shape === "diamond") return <Diamond color={color} />;
  if (shape === "square") return <Square color={color} />;
};

export default Shape;
