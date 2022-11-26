
const Planet = (props) =>{
    console.log(props)
    const {name,diameter,climate,gravity,terrain,population} = props.planet
    return(
    <div>
        <h3>Name: {name}</h3>
        <h3>Diameter: {diameter}</h3>
        <h3>Climate: {climate}</h3>
        <h3>Gravity: {gravity}</h3>
        <h3>Terrain: {terrain}</h3>
        <h3>Population: {population}</h3>
    </div>
    )
}

export default Planet