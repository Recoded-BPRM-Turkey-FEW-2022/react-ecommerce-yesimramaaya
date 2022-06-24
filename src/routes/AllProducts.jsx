import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const AllProducts = () => {
    const [maxPrice, setmaxPrice] = useState(0);

    const { isLoading, error, data } = useQuery('repoData', () => {
        return fetch('https://api.escuelajs.co/api/v1/products').then(data =>
            data.json()
        )
    });
    const [filterData, setfilterData] = useState(data);
    console.log(data)
    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;


    return (
        <div className='row'>
            <div className="col-md-3 col-centered">
                <input type="number" name="quantiy" placeholder='Max Price' value={maxPrice} onChange={(e) => {
                    setmaxPrice(maxPrice)
                }} />
            </div>
            {data.map(res => (
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
                                    {res.name}/5 rating
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

export default AllProducts;