import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Finder = () => {

   // const APP_ID = 
   // const APP_KEY = 
    const [char,setChar] = useState([])
    const [quer, setQuer] = useState('')

    const getCharity = async () => {
        try{

        //const response = await axios.get('')
        setChar(response.data)
        }
        catch(error){
            console.error("Error getting charities: ", error)
        }
    }

    useEffect( () => {
        getCharity()
    }, [quer])

    return (
        <div>
            <h1>Charity Finder</h1>
        <input
        type = "text"
        value = {quer}
        onChange = {(e) => setQuer(e.target.value)}
        placeholder = "Search for Charities" 
        />
        <ul>
             {char.map((charity) => (
                <li key ={charity.id}>{charity.name}</li>
             ))}
        </ul>
        </div>
    )

}

export default Finder