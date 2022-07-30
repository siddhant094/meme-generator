import trollface from "../assets/Troll Face.png";

export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <img src={trollface} alt="" className="nav--img"></img>
        <p className="nav--text">Meme Generator</p>
      </div>
    </div>
  );
}
