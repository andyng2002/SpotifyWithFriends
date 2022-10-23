import React from 'react';
import axios from 'axios';


export const GetCode = () => {

    const returnCode = () => {
        const code = new URLSearchParams(window.location.search).get('code');
        axios.post("http://localhost:8888/access",{code: code}).then(data=>{console.log("Client Side")}).catch(error=>console.log("cock"));
        window.location.replace("http://localhost:8080");
    }

    return (
        <button onClick={returnCode}>Get Auth Code</button>
    )
}