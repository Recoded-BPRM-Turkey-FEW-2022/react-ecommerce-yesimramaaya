import React from 'react';
import { useParams,Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
//import { QueryCache } from 'react-query'
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
        <div style={{ margin: '40px' }} >
                <div key={data.id}>
                    <Link to={`/products/${data.id}`}>
                    <h2> {data.title}</h2>
                    <p> {data.description}</p>
                    <img  src={data.image} alt={data.title} />
                    <p> {data.category}</p>
                    <p> {data.rating.count} {data.rating.rate}</p>
                    </Link>
                </div>
        </div>
    )
}
export default Product
/*const queryCache = new QueryCache({
    onError: error => {
      console.log(error)
    },
    onSuccess: data => {
      console.log(data)
    }
  })
 const query = queryCache.find('repoData')*/
