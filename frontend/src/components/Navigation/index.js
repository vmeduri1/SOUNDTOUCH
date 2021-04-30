// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Explosion from './explosion.png';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className="nav-item nav-links-container">
                        <NavLink className= "nav-link" to="/login" >Home</NavLink>
                        <NavLink className= "nav-link" to="/upload">Upload</NavLink>
                    </div>
                <div className="nav-item user-profile-container">
                    <NavLink className= "nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/logout">/Logout</NavLink>
                </div>
            </>

        );
    } else {
        sessionLinks = (
            <>

                <div className="nav-item nav-links-container">
                    <NavLink className= "nav-link" to="/" >Home</NavLink>
                    <NavLink className= "nav-link" to="/signup">Sign-Up</NavLink>
                </div>
                <div className="nav-item user-profile-container">
                    <NavLink className= "nav-link" to="/login">Login</NavLink>
                </div>
            </>
        );
    }

    return (
        <div className="navbar">
            <div className="logo-image-container nav-item"><img className="logo-image" src={Explosion}/></div>
            <div className="app-name nav-item">SoundTouch</div>
            {isLoaded && sessionLinks}
        </div>



    );
}

export default Navigation;
