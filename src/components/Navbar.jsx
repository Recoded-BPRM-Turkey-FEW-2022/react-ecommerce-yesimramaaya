import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useSelector } from "react-redux"
import ReactDOM from 'react-dom'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCartShopping, faSignIn } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-2 font-weight-bold" href="#">E-COMMERCE WEBSITE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Clothes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Furniture</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Others</a>
                            </li>

                        </ul>
                        <div class="d-flex justify-content-end">
                            <form class="form-inline my-2 my-lg-0 ">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <div className='buttons  '>
                                <a href="" className='btn btn-outline-dark ms-3'>
                                    <FontAwesomeIcon icon={faUserPlus} />Log In</a>
                                <a href="" className='btn btn-outline-dark ms-3'>
                                    <FontAwesomeIcon icon={faCartShopping} />Cart</a>


                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}