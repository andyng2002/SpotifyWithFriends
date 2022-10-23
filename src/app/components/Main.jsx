import React from 'react';
//import { LogIn } from './LogIn';
//import Box from '@mui/material/Box';
import { LandingPage } from './LandingPage';
import { HomePage } from './HomePage';
import { Router, Route, Routes } from "react-router-dom"
import { Group } from './Group';
import { NavBar } from './Navbar';
import { YourDataPage } from './YourDataPage';

function Main() {
    return(
        <>
            <Routes>
                <Route exact path="/" element = {<LandingPage />} />
            </Routes>
            <NavBar></NavBar>
            <Routes>
                <Route path = "/home" element = {<HomePage />} />
                <Route path = "/yourdata" element = {<YourDataPage />} />
            </Routes>
        </>
    );
}

export default Main