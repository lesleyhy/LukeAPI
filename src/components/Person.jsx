
const Person = (props) =>{
    const {name,height,mass,gender} = props.person
    return(
    <div>
        <h3>Name: {name}</h3>
        <h3>Height: {height}</h3>
        <h3>Mass: {mass}</h3>
        <h3>Gerner: {gender}</h3>
    </div>
    )
}

export default Person