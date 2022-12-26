// homepage stuff.
import { useRef, useState } from "react";
import WorkExperiences from "./workExperience";
import { firestore} from "./firebase";
import { addDoc, collection } from "@firebase/firestore"

const Home = () => {
    // clicks = 0
    var [num, setNum] = useState(0);
    const handleClick = (e) =>{
        console.log("hehe you clicked", e);
        setNum(num++);
    }

    const messageRef = useRef();
    const ref = collection(firestore, "messages");

    const [experiences, setExperiences] = useState([
        { title: 'Backend Engineer - Intern', place:'Varietas', link:'https://varietas.co.jp/', startDay: '2021 Jan', endDay: 'Current', body: 'Testing testing testing \n ahahahaasfateg !!asdf', id: 0 },
        { title: 'System Engineer - On Call', place:'Viasta', startDay: '2021 Aug', endDay: 'Current', body: 'Testing testing testing \n ahahahaasfateg !!asdf', id: 1 },
        { title: 'Secretary', place:'Spadina Health Centre', startDay: '2017', endDay: '', body: '', id: 2 },
        { title: 'Tutor', place:'Self-Employeed', startDay: '2020 Feb', endDay: '2020 Apr', body: '', id: 3 },
    ]);

    const handleDeleteExperience = (id) => {
        const newExperiences = experiences.filter(experience => experience.id !== id);
        setExperiences(newExperiences);
    }

    const handleSave = async(e) =>{
        e.preventDefault();

        let data = {
            message:messageRef.current.value,
        }

        try{
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    }
    // const handleClickAgain = (name, e) => {
    //     console.log("hehe " + name + e.target);
    // }
    return (
        <div className="Home">
            <div className="content">
                <h1>Hey There!</h1>
                <h2>Welcome to my website, I am Jay :)</h2>
                <form onSubmit={handleSave}>
                    <input type="text" ref={messageRef}></input>
                    <button onClick={handleClick} type="submit">Click me to enter your name!</button>
                </form>
                {/* <button onClick={(e) => {handleClickAgain("jay", e)}}>Click meeeee</button> */}
                You have clicked {num} times. 
                <WorkExperiences experiences={experiences} handleDeleteExperience={handleDeleteExperience}></WorkExperiences>
                
                
            </div>
        </div>
    )
}

export default Home;