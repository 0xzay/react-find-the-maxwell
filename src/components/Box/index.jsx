import "./style.css";

const Box = ({ onClick, index, box, catIndex, done }) => {
  const handleClick = () => {
    if (!done) {
      onClick(index);
    }
  };

  return (
    <div className="box" onClick={handleClick}>
      {box ? (
        <img
          src="https://media.tenor.com/vKDRxR1SMgAAAAAC/maxwell-maxwellthecat.gif"
          className="box__img"
        ></img>
      ) : (
        ""
      )}
    </div>
  );
};

export default Box;
