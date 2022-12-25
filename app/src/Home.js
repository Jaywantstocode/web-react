// homepage stuff.
import { useState } from "react";

const Home = () => {
    // clicks = 0
    var [num, setNum] = useState(0);
    const handleClick = (e) =>{
        console.log("hehe you clicked", e);
        setNum(num++);
    }



    // const handleClickAgain = (name, e) => {
    //     console.log("hehe " + name + e.target);
    // }
    return (
        <div className="Home">
            <div className="content">
                <h1>Hey There!</h1>
                <h2>Welcome to my website, I am Jay :)</h2>
                <button onClick={handleClick}>Click meeeee</button>
                {/* <button onClick={(e) => {handleClickAgain("jay", e)}}>Click meeeee</button> */}
                You have clicked {num} times. 
            </div>
        </div>
    )
}

export default Home;