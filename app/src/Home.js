// homepage stuff.
import { useState } from "react";

const Home = () => {
    // clicks = 0
    var [num, setNum] = useState(0);
    const handleClick = (e) =>{
        console.log("hehe you clicked", e);
        setNum(num++);
    }

    const [experiences] = useState([
        { title: 'Backend Engineer - Intern', place:'Varietas', link:'https://varietas.co.jp/', startDay: '2021 Jan', endDay: 'Current', body: 'Testing testing testing \n ahahahaasfateg !!asdf', id: 0 },
        { title: 'System Engineer - On Call', place:'Viasta', startDay: '2021 Aug', endDay: 'Current', body: 'Testing testing testing \n ahahahaasfateg !!asdf', id: 1 },
        { title: 'Secretary', place:'Spadina Health Centre', startDay: '2017', endDay: '', body: '', id: 2 },
        { title: 'Tutor', place:'Self-Employeed', startDay: '2020 Feb', endDay: '2020 Apr', body: '', id: 3 },
    ]);

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

                <h2>My Work Experiences:</h2>
                {experiences.map((experience) => (
                <div className="experience" key={experience.id}>
                    <h3>{experience.title} </h3>
                    <h4><a href={experience.link}>{experience.place}</a></h4>
                    <p>{experience.startDay} ~ {experience.endDay}</p>
                    <p>{experience.body}</p>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default Home;