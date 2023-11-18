import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
export default function nav() {
    return (
        <div className='nav'>
            <ul>
                <li><Link className="nav-items" to="/add-question" >Add New Question</Link></li>
                <li><Link className="nav-items" to="/questions" >All Questions</Link></li>
            </ul>
        </div>
    )
}
