// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SuperheroLogo from './superheroLogo.png';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className="nav-item nav-links-container">
                        <NavLink className= "nav-link" to="/login" >Home</NavLink>
                        <NavLink className= "nav-link" to="/signup">Upload</NavLink>
                    </div>
                <div className="nav-item user-profile-container">
                    <NavLink className= "nav-link" to="/user">vmeduri</NavLink>
                </div>
            </>

        );
    } else {
        sessionLinks = (
            <>

                <div className="nav-item nav-links-container">
                    <NavLink className= "nav-link" to="/login" >Home</NavLink>
                    <NavLink className= "nav-link" to="/signup">Upload</NavLink>
                </div>
                <div className="nav-item user-profile-container">
                    <NavLink className= "nav-link" to="/user">vmeduri</NavLink>
                </div>
            </>
        );
    }

    return (
        <div className="navbar">
            <div className="logo-image-container nav-item"><img className="logo-image" src={SuperheroLogo}/></div>
            <div className="app-name nav-item">Sound Touch</div>
            {isLoaded && sessionLinks}
        </div>



    );
}

export default Navigation;
