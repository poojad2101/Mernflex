import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as userService from '../../utilities/users-service'
<<<<<<< HEAD
=======

>>>>>>> 3d22066c1a7322d8c8f83ce78c0196c5561c679e
export default function NavBar({ user, setUser, clickedProfile,setClickedProfile, inputHandler}) {
    
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        setClickedProfile("")
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }
    return(
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">Mernflex</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/tvshows">TV Shows</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/watchlistpage">My Watchlist</Link>
                    </li>
                </ul>
                    <form class="form-inline nav-form my-2 my-lg-0 mr-auto">
                        <input 
                        class="form-control mr-sm-2" 
                        type="search" placeholder="Search" aria-label="Search" label="Search"
                        onInput={inputHandler}>
                        </input>
                    </form>
                    <ul class="navbar-nav mr-auto ">
                    <li class="nav-item"> <Link className="nav-link" to="" onClick={handleLogOut}>Log Out</Link></li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/profiles">{clickedProfile.ProfileName}</Link>
                    </li>
                    </ul>
            </div>
        </nav>
)
    }