import { useState, useEffect } from "react";
// import memesData from "./memesData";

export default function Form() {
  const [memeArray, setMemeArray] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeArray(() => data.data.memes));
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage(e) {
    e.preventDefault();
    // const memesArray = memesData.data.memes;
    const length = memeArray.length;
    let num = Math.floor(Math.random() * length);
    const url = memeArray[num].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomUrl: `${url}`,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <div className="form--inputs">
          <input
            type="text"
            placeholder="Enter Top Text"
            id="form--line1"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
          ></input>

          <input
            type="text"
            placeholder="Enter Bottom Text"
            id="form--line2"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" onClick={getMemeImage}>
          Get a new meme Image🖼️🎲
        </button>
      </form>
      <div className="imageBox">
        <div className="image--flex">
          <img src={meme.randomUrl} alt="img"></img>
        </div>
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
      </div>
    </div>
  );
}
