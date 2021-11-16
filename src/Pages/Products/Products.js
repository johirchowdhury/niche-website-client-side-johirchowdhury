import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-meadow-52963.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const url = `https://enigmatic-meadow-52963.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Data Successfully Deleted");
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }
    return (

        <div>

            <div className="container">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <tr >

                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description.slice(0, 100)}</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button></td>




                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Products;