import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import {useQuery, useMutation } from 'react-query';

function Product() {
    let { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    console.log(id)
    const { isLoading, error, data } = useQuery(`/products/${id}`, () =>{
        return fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then(res =>
            res.json()
        );
});
    console.log(data)
    const addToCart=useMutation((cartData)=>{
        return fetch("http://localhost:3002/cart",{
            method: "POST",
            headers:{
                Accept:"application/json",
                "content-Type":"application/json"
            },
            body:JSON.stringify(cartData),
        })
    });
    if (isLoading) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    return (
        <>
        <div className='row'>
            <div className='col-md-6' style={{display: 'grid', placeItems: 'center'}}>
                <img src={data.images} alt={data.title}
                    height="500px" width="500px" />
            </div>
            <div className='col-md-6'>
                {/* <h4 className='text-uppercase text-black-50'>{data.category.id}
                </h4> */}
                <h1 className='display-5'>{data.title}</h1>

                <h3 className='display-6 fw-bold my-4'>${data.price}</h3>
                <p className='lead ' style={{width: '50%'}}>{data.description}</p>
                <input className='btn-outline-dark px-4 py-2 rounded-5 border-dark' placeholder="Quantity" type="number" value={quantity} onChange={(e) => {
                    setQuantity(e.target.value)
                }}
                />
                <button class="btn" style={{color: '', border: 'solid 3px white', borderRadius: '20px' ,margin:'10px'}} onClick={() => {
                    addToCart.mutate({
                        id: data.id,
                        title: data.title,
                        price: data.price,
                        images:data.images,
                        quantity: quantity,
                    });
                }}
                >
                    Add to Cart</button>
                    <Link to="/Cart">
                    <button class="btn" style={{color: 'black', border: 'solid 3px white', borderRadius: '20px'}} > 
                Go to Cart</button>
                    </Link>
            </div>
            </div>
        </>
    )
}

export default Product