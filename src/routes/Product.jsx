import React from 'react';
import { useParams,Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
const queryClient = new QueryClient()
 
function Product() {
  return (
    <QueryClientProvider client={queryClient}>
        <FetchProducts />
    </QueryClientProvider>
)
}
function FetchProducts() {
  let userId = useParams();
  console.log(userId.id)
  const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://fakestoreapi.com/products/${userId.id}`).then(res =>
            res.json()
        )
    )
    console.log(data)
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
      <div className='row'>
              <div className='col-md-3 mb-4' >
              <Link to={`/products/${data.id}`}>
                  <Card className='h-100 text-center p-4 mb-4'>
                      <CardImg
                          alt="Card image cap"
                          src={data.image}
                          top
                          width="100%"
                          height="300px"
                      />
                      <CardBody>
                          <CardTitle className='' tag="h5">{data.title}
                          </CardTitle>
                          <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                          >
                              {data.rating.rate}/5 rating
                          </CardSubtitle>
                          <h4> ${data.price}</h4>
                      </CardBody>
                  </Card>
                  </Link>
              </div>
          ))
      </div>

  )}
export default Product
