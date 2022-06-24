import React from 'react';
import { useParams,Link } from "react-router-dom";
import {useQuery } from 'react-query';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

 
function Categories() {
  return (
        <FetchJewelery />
)
}
function FetchJewelery() {
 let userId = useParams();
  const { isLoading, error, data } = useQuery(['repoData', userId], () =>
  
  fetch(`https://api.escuelajs.co/api/v1/categories/${userId.id}`).then(res =>
      res.json()
  )
)
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
                    </Card>
                    </Link>
                </div>
            
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