import React from 'react';
import axios from "axios";

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
        <button onClick={logIn}>Log In</button>
    );
}