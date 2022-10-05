import React from 'react'
import './todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faRaspberryPi
} from "@fortawesome/free-brands-svg-icons";


function Todolists(props) {
    
    return (
        <div className='mnli'>
        <button onClick={() => props.onslect(props.id)}><FontAwesomeIcon icon={faRaspberryPi}  /></button> 
        <li>{props.texts}</li>
        </div>
    )
}
export default Todolists;