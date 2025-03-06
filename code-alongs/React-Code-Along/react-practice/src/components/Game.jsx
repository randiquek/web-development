import React, { useState, useEffect } from 'react'
import '../App.css'

export default function Game(props) {  

return ( <li key={props.name} > {props.name}: {props.developer}</li>);


}