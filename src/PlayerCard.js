import React from 'react'


function PlayerCard({player,deletePlayer,updatePlayer}){

    const {id, name, image, likes} = player
     

        function likeClick(){
            const likePlayer = {
                likes: likes + 1,
            }

            fetch(`http://localhost:3000/players/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json", 
            },
                body: JSON.stringify(likePlayer), 


            })

            .then((res) => res.json())
            .then(updatePlayer)
        }
    
  

     return (
        <div>
            <h3>{player.name}</h3>
            <img src ={player.image} alt={player.name} style={{height: 200}}/>
            <h4> {player.team}</h4>
            <h5> Likes: {player.likes}</h5>
            <button className= "like-btn" onClick = {likeClick}>Like</button>

            <button className= "delete-btn" onClick={(e)=>deletePlayer(player)} >delete</button>

            <hr/>
            
        </div>

    )
}

export default PlayerCard