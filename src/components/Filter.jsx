import React from 'react';
import { useParams,Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
const queryClient = new QueryClient()
 
function Categories() {
  return (
    
        <FetchJewelery />
)
}
function FetchJewelery() {
  let userId = useParams();
  console.log(userId)
  const { isLoading, error, data } = useQuery(['repoData', userId], () =>
  fetch(`https://fakestoreapi.com/products/category/${userId.id}`).then(res =>
      res.json()
  )
)
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
export default Categories
/*const handleSearch = (keyword) => {
return products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
  };
*/