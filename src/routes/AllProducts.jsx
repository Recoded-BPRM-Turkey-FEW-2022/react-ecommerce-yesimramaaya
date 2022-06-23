import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

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



        <div className='row'>
            {data.map(res => (
                <div className='col-md-3 mb-4' >
                <Link to={`/products/${res.id}`}>
                    <Card className='h-100 text-center p-4 mb-4'>
                        <CardImg
                            alt="Card image cap"
                            src={res.image}
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
                                {res.rating.rate}/5 rating
                            </CardSubtitle>
                            <h4> ${res.price}</h4>


                        </CardBody>
                    </Card>
                    </Link>
                </div>


            ))}
        </div>

    )
}












