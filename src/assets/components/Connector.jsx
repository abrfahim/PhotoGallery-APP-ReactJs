import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import SignUp from './SignUp'
import LogIn from './LogIn'
import LogOut from './LogOut'


const Connector =() => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='signup/' element={<SignUp/>}/>
                    <Route path='login/' element={<LogIn/>}/>
                    <Route path='logout/' element={<LogOut/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Connector