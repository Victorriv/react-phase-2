import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav(){
    
    return(
        <div>
            <NavLink style= {{marginRight: "10px"}} to = "/"> Home </NavLink>
            <NavLink style= {{marginRight: "10px"}}  to = "/players"> All Players</NavLink>
            <NavLink style= {{marginRight: "10px"}}  to = "/players/new"> Add a Player!</NavLink>
        </div>

    )
}

export default Nav