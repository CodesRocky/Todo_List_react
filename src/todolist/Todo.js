import React, { useState } from 'react'
import './todo.css'
import Todolists from './Todolists';

function Todo() {
    const [inputlist, setInputlist] = useState('');
    const [arr, setArr] = useState([])

    const itemevent = (event) => {
        setInputlist(event.target.value)
    }

    const mngbtn = () => {
        setArr((oldarr) => {
            return (
                [...oldarr, inputlist]
            )
        }
        )
        setInputlist('')
    }

    const removeitm = (id) =>
    {
        setArr((oldarr) =>
        {
            return(
                oldarr.filter(
                    (arrElement,index) =>
                    {
                        return(
                            index !== id
                        )
                    }
                )
            )
        }
        )
    }

    return (
        <div className='m1'>
            <div className='m2'>
                <h1 className='m3'>
                    Todo List
                </h1>
                <div className='m4'>
                    <input className='m5' type={'text'} value={inputlist} placeholder='Add a Item' onChange={itemevent} />
                    <button className='btn' onClick={mngbtn}> + </button>
                </div>
                <ol className='m6'>
                    {/* <li> {inputlist} </li> */}
                    {arr.map((showval, index) => {
                        return (
                            <Todolists 
                            key={index} 
                            id={index} 
                            texts={showval} 
                            onslect={removeitm}
                            />
                        )

                    }
                    )}
                </ol>
            </div>
        </div>
    )
}
export default Todo;