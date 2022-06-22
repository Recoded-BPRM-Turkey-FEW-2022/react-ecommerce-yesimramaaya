import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCartShopping, faSignIn } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">E-COMMERCE WEBSITE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Jewellery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Men's Clothing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Women's Clothing</a>
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Electronics</a>

                            </li>
                        </ul>
                        <form class="d-flex mt-5">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className='buttons  '>
                            <a href="" className='btn btn-outline-dark ms-3 '>
                                <FontAwesomeIcon icon={faSignIn} />Login</a>
                            <a href="" className='btn btn-outline-dark  ms-3'>
                                <FontAwesomeIcon icon={faUserPlus} /> Register </a>
                            <a href="" className='btn btn-outline-dark ms-3'>
                                <FontAwesomeIcon icon={faCartShopping} />Cart</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

