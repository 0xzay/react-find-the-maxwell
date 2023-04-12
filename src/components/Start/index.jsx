import "./style.css";

const Start = ({ onClick, openStatisticHandler }) => {
  return (
    <div className="start">
      <h1 className="start__header">Find Maxwell's cat</h1>
      <img
        src="https://i1.sndcdn.com/avatars-d2S4V3ZNc04RX8kb-dlrQrg-t500x500.jpg"
        alt=""
        className="start__img"
      />
      <div className="start__buttons">
        <button className="start__button" onClick={onClick}>
          Start game 🐱
        </button>
        <button className="start__button" onClick={openStatisticHandler}>
          Statistic 📈
        </button>
        <button
          onClick={() => (window.location.href = "https://github.com/hecudev")}
          className="start__button"
        >
          Author 👨‍💻
        </button>
      </div>
    </div>
  );
};

export default Start;
