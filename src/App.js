import './App.css';
import Players from './Players'
import PlayerForm from './PlayerForm'
import Nav from './Nav'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'  
import {useEffect, useState} from 'react' 


function App() {
  const [players, setPlayers]= useState([])  
  
    useEffect(()=>{
      fetch('http://localhost:3000/players')
      .then(res=> res.json())
      .then(playerData => setPlayers(playerData))  
    


    },[]) 

    function newPlayer(newPlayer){ 
      setPlayers([...players, newPlayer]) 

    }

   // function deletePlayer(deletePlayer){
     // const updatedPlayers=
     // setPlayers(updatedPlayers)
   // }
  

    function updatePlayer(likedPlayer){ 
      const changedPlayers = players.map((player)=> player.id === likedPlayer.id ? likedPlayer: player) // 
      setPlayers(changedPlayers)
    }
  
  return (
    <div className="App">
      <Nav/>
      <Switch> 
      <Route exact path = "/players"> 

      <Players players={players}
      updatePlayer ={updatePlayer}/> 
      </Route>

      <Route exact path ="/players/new">
     <PlayerForm newPlayer={newPlayer}/>
     </Route>

     <Route exact path = "/" >
       <Home/>
     </Route>

     </Switch>
    </div>
  );
}

export default App;