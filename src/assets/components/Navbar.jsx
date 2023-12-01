import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { user ,loginWithRedirect, isAuthenticated, logout} = useAuth0();
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    { isAuthenticated ? 
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active " >
                            <a class="nav-link btn btn-info btn-sm" href="#"> <NavLink to='/'>Home</NavLink> </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link btn btn-info btn-sm" href="#"> 
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                                </button>
                            </a>
                        </li>
                    </ul>
                    :
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a className="nav-link btn btn-info btn-sm" href="#"> 
                                <button onClick={() => loginWithRedirect()}>Log In</button>
                            </a>
                        </li>
                    </ul>
                    }
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" >
                            {isAuthenticated && <p>{user.name}</p>}
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;