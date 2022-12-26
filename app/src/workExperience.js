
const WorkExperiences = ( {experiences, handleDeleteExperience} ) => {
    return(
        <div className="Work-Experience">
        <h2>My Work Experiences:</h2>
        {experiences.map((experience) => (
        <div className="experience" key={experience.id}>
            <h3>{experience.title} </h3>
            <h4><a href={experience.link}>{experience.place}</a></h4>
            <p>{experience.startDay} ~ {experience.endDay}</p>
            <p>{experience.body}</p>
            <button onClick={() => handleDeleteExperience(experience.id)}>hehe</button>
        </div>
        ))}
        </div>
    );
}

export default WorkExperiences;