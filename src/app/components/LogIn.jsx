import React from 'react';
import axios from "axios";

export const LogIn = () => {
    /*let logIn = () => {
        fetch('http://localhost:8888/clicked',{method:"GET"})
            .then((response)=> {
                if (response.ok) {
                    console.log("Success");
                }
            })
            .catch((error)=>{
                console.log(error);
            })
    };*/

    let logIn = () => {
        fetch("http://localhost:8888/clicked",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer: ${"Tyler"}`,
            }
        })
    }

    return (
        <button onClick={logIn}>Log In</button>
    );
}