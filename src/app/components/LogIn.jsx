import React from 'react';
import axios from "axios";
import Button from '@mui/material/Button';

export const LogIn = () => {

    /*let logIn = () => {
        fetch("http://localhost:8888/clicked",{
            method: "GET",
            mode: "cors",
        })
    } */

    /*const getAuthURL = () => {
        axios.get("http://localhost:8888/clicked").then(data=> {console.log(data.data)}).catch(error=>console.log(error));
    }
    getAuthURL();*/

    const logIn = () => {
        axios.get("http://localhost:8888/clicked").then(data=>{window.location.replace(data.data)}).catch(error=>console.log(error));
    }

    return (
        <Button
        onClick={logIn}
        variant='contained' 
        sx={{ 
            backgroundColor:'#1DB954',
            border:'1px white solid',
            width:'300px',
            height:'60px',
            fontWeight: 'bold',
            fontSize:20
            }}>
            Login with Spotify
        </Button>
    )
    
}