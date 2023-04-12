import "./style.css";

const Statistic = ({ onClick, clearStatistic }) => {
  return (
    <div className="statistic">
      <h1>Statistic</h1>
      <img
        className="statistic__img"
        src="https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/8082768bcf4/831fc056bd5193ef449e9/ios_large_1673884179_image.jpg"
        alt=""
      />
      <p>Games played: {localStorage.getItem("games-played") || "0"}</p>
      <p>Maxwell found: {localStorage.getItem("maxwell-found") || "0"}</p>
      <div className="statistic__buttons">
        <button className="statistic__button" onClick={clearStatistic}>
          Clear statistic
        </button>
        <button className="statistic__button" onClick={onClick}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Statistic;
