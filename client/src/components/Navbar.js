import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <Link to="/AddExercise">AddExercise</Link>
      <Link to="/GenerateRoutine">GenerateRoutine</Link>
      {/* <Link to="/exerciseRoutine">Routine</Link> */}
      <button onClick={logout}>Logout</button>
    </div>
  )
}