import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCartShopping, faSignIn } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 px-5">
                <div class="container-fluid  ">

                    <a class="navbar-brand fw-bold" href="#">E-COMMERCE WEBSITE</a>
                    <div class="mx-auto">
                        <button class="mx-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className='buttons  '>
                        <a href="" className='btn btn-outline-dark ms-3 '>
                            <FontAwesomeIcon icon={faSignIn} />Login</a>
                        <a href="" className='btn btn-outline-dark  ms-3'>
                            <FontAwesomeIcon icon={faUserPlus} /> Register </a>
                        <a href="" className='btn btn-outline-dark ms-3'>
                            <FontAwesomeIcon icon={faCartShopping} />Cart</a>
                    </div>



                </div>
            </nav>
        </>
    )
}

