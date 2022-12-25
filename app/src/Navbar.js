// this is how to make a component. basically a function.

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Jayson Hao</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about" >About me</a>
                {/* <a href="/about" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>About me</a> */}
                <a href="/projects">Projects</a>
            </div>
        </nav>
    );
}

export default Navbar;