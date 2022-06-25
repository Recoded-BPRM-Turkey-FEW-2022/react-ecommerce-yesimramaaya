import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { NavLink ,Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCartShopping, faSignIn } from '@fortawesome/free-solid-svg-icons'
import Search from './Search';


export default function Navbar() {
    const [SearchValue,setSearchValue]=useState("");
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-2 font-weight-bold" href="#">Y & A</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                            <Link to={`filter/jewelery`} class="nav-link active fw-bold" aria-current="page" href="#">jewelery</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={`filter/men's clothing`} class="nav-link active fw-bold" aria-current="page" href="#">men's clothing</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={`filter/women's clothing`} class="nav-link active fw-bold" aria-current="page" href="#">women's clothing</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={`filter/electronics`} class="nav-link active fw-bold" aria-current="page" href="#">electronics</Link>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-end">
                            <form class="form-inline my-2 my-lg-0 ">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                    setSearchValue(e.target.value)}} />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  >Search</button>
                            </form>
                            <div className='buttons  '>
                                <a href="" className='btn btn-outline-dark ms-3'>
                                    <FontAwesomeIcon icon={faUserPlus} />Log In</a>
                                    <Link to="/Cart">
                                <a href="" className='btn btn-outline-dark ms-3'>
                                    <FontAwesomeIcon icon={faCartShopping} />Cart</a>

                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Search SearchValue={SearchValue}/>
        </>
        
    )
}