import React from 'react';
//import { LogIn } from './LogIn';
//import Box from '@mui/material/Box';
import { LandingPage } from './LandingPage';
import { HomePage } from './HomePage';
import { Link, Route, Routes } from "react-router-dom"
//import { Router, Route } from 'react-router-dom';
import { Group } from './Group';

function Main() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">LandingPage</Link>
                    </li>
                    <li>
                        <Link to="/home">HomePage</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/" element = {<HomePage />} />
                <Route path = "/home" element = {<LandingPage />} />
            </Routes>
        </>
    );
}

export default Main

