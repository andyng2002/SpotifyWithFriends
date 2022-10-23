import React from 'react';
//import { LogIn } from './LogIn';
//import Box from '@mui/material/Box';
import { LandingPage } from './LandingPage';
import { HomePage } from './HomePage';
import { Link, Route, Routes } from "react-router-dom"
//import { Router, Route } from 'react-router-dom';
import { Group } from './Group';
import { NavBar } from './navbar';

function Main() {
    return(
        <>
            <NavBar></NavBar>
            <Routes>
                <Route exact path="/" element = {<LandingPage />} />
                <Route path = "/home" element = {<HomePage />} />
            </Routes>
        </>
    );
}

export default Main

