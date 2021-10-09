import React, {useState} from 'react'



function PlayerFrom({newPlayer}){
    
    const[name, setName] = useState({

        name: "",
        image: "",
    })
        const addPlayer = {
            ...name,
            likes: 0,
        }
        
    function handleSubmit(e){
        e.preventDefault() 
        setName('')  
        fetch('http://localhost:3000/players', {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addPlayer) 
        })
            .then((res)=> res.json())
            .then(newPlayer)
        

        

    }

    function handleChange(e){
        setName({
            ...name,
            [e.target.name]:e.target.value,
        })


    }
 

    return (
        <div>
            <h3>Player Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input type = "text" name= "name" value ={name.name} onChange={handleChange}/>

                </label>
                <label>
                    Img: 
                    <input type ="text" name ="image" value ={name.image} onChange = {handleChange}/>
                </label>

                <input type = "submit" name="image" value = "Add a player"/>

                </form>
                <br/>
                <img src = "https://cdn.wallpapersafari.com/35/61/uaj7PS.jpg" alt = "NFL" style ={{width:500}} />
            
        </div>

    )
}



export default PlayerFrom

 