import React from 'react'
import { useQueryClient,useQuery,useMutation } from 'react-query';
import { Card } from 'reactstrap';

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
<h1>Cart</h1>
<div>
    {data.map((CartProduct)=>{
        return (
            <div>
                <p>Title:{CartProduct.title}</p>
                <p>Price:{CartProduct.price *CartProduct.quantity}</p>
                
                <button onClick={()=>{
                    DeletData.mutate(CartProduct.id)
                }}>Delete</button>
            </div>
        )
    })
    }
</div>
</div>
}

export default Cart;