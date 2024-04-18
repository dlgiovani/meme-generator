import trollface from "/images/trollface.svg"


function Header() {

    return (
        <>
        <header>
            <nav className="nav">
                <div className="logo">
                    <img src={trollface} alt="troll face" />
                    <p>Meme Generator</p>
                </div>
                <p>by <a href="dlgiovani.github.io">dlgiovani.github.io</a></p>
            </nav>
        </header>
        </>
    )

};

export default Header;