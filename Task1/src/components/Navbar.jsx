function Navbar() {
    return (
        <div>
            <nav className="navigationbar">
                <div className="logo">
                    <img
                        src="https://avatars.githubusercontent.com/u/162087021?s=200&v=4"
                        alt="Logo"
                    />
                </div>
                <div className="buttons">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
