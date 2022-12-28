export const Modal = ({ status, resetGame }) => {
  return (
    <div className="modal_background">
      <div className="modal_wrapper">
        <h2 className="modal_text">{status}</h2>
        <button className="modal_btn" onClick={resetGame}>
          🎮START AGAIN🎮
        </button>
      </div>
    </div>
  );
};
