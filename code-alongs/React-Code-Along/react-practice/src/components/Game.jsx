import React, { useState, useEffect } from 'react'
import '../App.css'

export default function Game(props) {  

return ( <li key={props.name} > {props.name} <br/>Developer: {props.developer} <br/>Release Year: {props.releaseYear} <br/>Genre: {props.genre}</li>);


}