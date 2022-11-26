import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Person from './Person'
import Planet from './Planet'
import Error from './Error';

export const LukeApi = (props) =>{
    const navigate = useNavigate();
    const { key, id } = useParams();
    const [person, setPerson] = useState("")
    const [planet, setPlanet] = useState("")
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        key:"",
        id:"",
    })

    useEffect(() =>{
        console.log(id,key)
        axios.get(`https://swapi.dev/api/${key}/${id}`)
        .then((res)=> {
            if(key === "people"){
                console.log(res)
                setPerson(res.data)
                setPlanet(null)
                setError(null)
            }
            else if(key === "planets"){
                setPlanet(res.data)
                setPerson(null)
                setError(null)
            }
        })
        .catch((error)=>{console.log(error)
            setPerson(null)
            setPlanet(null)
            setError("No this id")
        });
    },[key,id])


    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const {key,id} = state;
        // console.log(key,id,state)
        navigate(`/${key}/${id}`);
    }

    const changeHandler =(e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Search for: </label>
                <select onChange={changeHandler} name="key">
                    <option value="null">Please select one</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label> ID: </label>
                <input type="number" onChange={changeHandler} name="id"/>
                <button>Search</button>
            </form>


            {
                person && <Person person={person}/>
            }
            {
                planet && <Planet planet={planet}/>
            }
            {
                error && <Error error={error}/>
            }
        </div>
    )
}    

export default LukeApi;