import React from 'react';
//import { LogIn } from './LogIn';
//import Box from '@mui/material/Box';
import { LandingPage } from './LandingPage';
import { HomePage } from './HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Group } from './Group';
import { NavBar } from './Navbar';
import { YourDataPage } from './YourDataPage';
import { NotFoundPage } from './NotFoundPage';

function Main() {
    return(
        <>
            <Router>
            <Routes>
                <Route exact path="/" element = {<LandingPage />} />
            </Routes>
            <NavBar></NavBar>
            <Routes>
                <Route path = "/home" element = {<HomePage />} />
                <Route path = "/yourdata" element = {<YourDataPage />} />
                <Route path = "*" element = {<NotFoundPage />} />
            </Routes>
            </Router>
        </>
    );
}

export default Main