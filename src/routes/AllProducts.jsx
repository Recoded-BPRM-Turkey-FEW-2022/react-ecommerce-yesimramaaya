import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const queryClient = new QueryClient()


export default function AllProducts() {
    return (
        <QueryClientProvider client={queryClient}>
            <FetchProducts />
        </QueryClientProvider>
    )

}
function FetchProducts() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://fakestoreapi.com/products').then(res =>
            res.json()
        )
    )
    console.log(data)
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div style={{ margin: '40px' }} >
            {data.map(res => (
                <div key={res.id}>
                    <Link to={`/products/${res.id}`}>
                    <h2> {res.title}</h2>
                    <p> {res.description}</p>
                    <img  src={res.image} alt={res.title} />
                    <p> {res.category}</p>
                    <p> {res.rating.count} {res.rating.rate}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}


