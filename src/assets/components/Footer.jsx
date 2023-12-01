import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Footer = () => {
    const {isAuthenticated} = useAuth0();
    return (
        <div>
            {isAuthenticated ?<div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <footer>
                            <p>All Rights Reserved &#169;2023</p>
                        </footer>
                    </div>
                </div>
            </div> 
            :
            <div></div>
            }
            
        </div>
    );
};

export default Footer;




  
  
