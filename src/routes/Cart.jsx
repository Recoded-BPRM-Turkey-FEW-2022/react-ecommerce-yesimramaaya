import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function Cart() {
    const { isLoading, error, data } = useQuery(`Cart`, () => {
        return fetch(`http://localhost:3002/cart`).then(res =>
            res.json()
        );
    });
    console.log(data)
    const queryClient = useQueryClient();
    const DeletData = useMutation((id) => {
        return fetch(`http://localhost:3002/cart/${id}`, {
            method: "DELETE",
        })
    },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Cart");
            },
        }
    );

    if (isLoading) return 'Loading...';
    return <div>
        {data.map((CartProduct) => {
            return (


                <div className='row'>
                    <div className="col-md-4">
                        <img src={CartProduct.category.image} alt={CartProduct.name} height="200px" weight="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{CartProduct.title}</h3>
                        <p className='"lead fw-bold'>
                            {CartProduct.price} X ${CartProduct.quantity} = $
                            {CartProduct.price * CartProduct.quantity}
                        </p>
                        <button className="btn btn-outline-dark me-4"
                            onClick={() => {
                                DeletData.mutate(CartProduct.category.id)
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                        <button className="btn btn-outline-dark"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>

            )
        })
        }


    </div>

}

export default Cart;