import React from 'react'
import { Link } from 'react-router-dom'

const Match = (props) => {
    return (
        //or use div
            <button className='dropdownbutton' onClick={props.onClick}>
                  {props.match.name} 
            </button>
    )
}

export default Match