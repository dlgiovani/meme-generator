import { useEffect, useState } from "react";
// import memesData from "../memesData";

function Body() {

    const [memesData, setMemesData] = useState([]);
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemesData(() => data.data.memes));
    }, []);

    function getMemeImage() {
        try {
            const randomNumber = Math.floor(Math.random() * memesData.length);
            let url = memesData[randomNumber].url;
            return url;
        } catch {
            return 'https://http.cat/404';
        }
    }

    const [memeImage, setMemeImage] = useState(getMemeImage);
    function handleMemeImage() {
        setMemeImage(getMemeImage);
    }

    const [memeText, setMemeText] = useState({ topText: "", bottomText: "" })
    function handleMemeText(event) {
        const { name, value } = event.target;
        setMemeText(prevMemeText => ({
            ...prevMemeText,
            [name]: value
        }));
    }

    return (
        <main className="main">
            <section className="input-container">
                <div>
                    <label htmlFor="toptext">Top Text</label>
                    <input type="text" id="toptext" placeholder="top text"
                        onChange={handleMemeText} name="topText" />
                </div>
                <div>
                    <label htmlFor="bottomtext">Bottom Text</label>
                    <input type="text" id="bottomtext" placeholder="bottom text"
                        onChange={handleMemeText} name="bottomText" />
                </div>

                <button className="submit" onClick={handleMemeImage}>Get a new meme image 🖼️</button>

            </section>
            <div className="meme">
                <img src={memeImage} alt="meme" />
                <h2 className="top-text">{memeText.topText}</h2>
                <h2 className="bottom-text">{memeText.bottomText}</h2>
            </div>
        </main>
    )
}

export default Body;