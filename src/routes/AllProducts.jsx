import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useQuery } from 'react-query'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const AllProducts=()=>{
    const [maxPrice, setmaxPrice]=useState();
    const [name, setname]=useState("");
    const { isLoading, error, data } = useQuery('products', () =>{
        return fetch('https://api.escuelajs.co/api/v1/products').then(data =>
            data.json()
        )
});

    const [filterData,setfilterData]=useState(data);
    console.log(data)
    useEffect(()=>{
        if(maxPrice>0){
            const filteredByPrice=data.filter(
                (product)=>
                product.price< maxPrice
            );
            setfilterData(filteredByPrice)
        }
        else{
            setfilterData(data)
        }
    },[maxPrice]);

    useEffect(()=>{
        if(name!== ""){
            const filteredByname=data.filter(
                (product)=>
                product.title.toLowerCase().includes(name.toLowerCase())
            );
            setfilterData(filteredByname)
        }
        else{
            setfilterData(data)
        }
    },[name]);


console.log(name)
    if (isLoading) return 'Loading...';
    return (
        <div>
        <h1>Filtering</h1>
            <div>
                <input type="number" name="quantiy" margin="10px" placeholder='Max Price' value={maxPrice} onChange={(e)=>{
                    setmaxPrice(e.target.value)
                }} />
            </div>
            <br></br>
            <div>
                <input type="text" name="name" margin="10px" placeholder='Name' value={name} onChange={(e)=>{
                    setname(e.target.value)
                }} />
            </div>
            <br></br>
        <div className='row'>
            {filterData && filterData.map(res => (
                <div className='col-md-3 mb-4' >
                <Link to={`/products/${res.id}`}>
                    <Card className='h-100 text-center p-4 mb-4'>
                        <CardImg
                            alt="Card image cap"
                            src={res.images}
                            top
                            width="100%"
                            height="300px"
                        />
                        <CardBody>
                            <CardTitle className='' tag="h5">{res.title}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {res.name}
                            </CardSubtitle>
                            <h4> ${res.price}</h4>
                        </CardBody>
                    </Card>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )

}

export default AllProducts; 










