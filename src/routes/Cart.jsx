import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function Cart() {
    const { isLoading, error, data } = useQuery(`Cart`, () =>{
        return fetch(`http://localhost:3002/cart`).then(res =>
            res.json()
        );
});
console.log(data)
const queryClient=useQueryClient();
const DeletData=useMutation((id)=>{
    return fetch(`http://localhost:3002/cart/${id}`,{
        method: "DELETE",
    })
},
{ onSuccess:()=>{
    queryClient.invalidateQueries("Cart");
},
}
);

if (isLoading) return 'Loading...';
return <div>
<div>
    {data.map((CartProduct)=>{
        return (
            <div className='row'>
        <div className='col-md-6' style={{display: 'grid', placeItems: 'center'}} margin="10px">
            <img src={CartProduct.images} alt={CartProduct.title}
                height="500px" width="500px" padding="20px" />
        </div>
        <br></br>
        <div className='col-md-6' margin="10px">
            <h1 className='display-5'>{CartProduct.title}</h1>
            <h3 className='display-6 fw-bold my-4'>${data.price}</h3>
            <p className='"lead fw-bold'>
                            {CartProduct.price} X ${CartProduct.quantity} = $
                            {CartProduct.price * CartProduct.quantity}</p>
                            <button className="btn btn-outline-dark me-4"
                            onClick={() => {
                                DeletData.mutate(CartProduct.id)
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                        <button className="btn btn-outline-dark"><FontAwesomeIcon icon={faPlus} /></button>
                        <br></br>
                        </div>
                        <br></br>
                </div>
        )
    })
    }
</div>
</div>
}
export default Cart;