import React from 'react'
import PlayerCard from './PlayerCard'
// this is a container component because it renders other  components. 
function Players({players,deletePlayer,updatePlayer}){

    

    const allPlayers = players.map(player=> <PlayerCard key={player.id} player = {player} deletePlayer={deletePlayer} 
       updatePlayer= {updatePlayer}/>) 
    return (
        <div>
            <h1> NFL Corners </h1>
            {allPlayers}

            
        </div>
    )
  
}

export default Players