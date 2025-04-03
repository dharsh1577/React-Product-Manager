import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from './custom-hook/useFetch';
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const ProductList = () => {

let navigate = useNavigate();
//   let [products, setproducts] = useState( [] )
//   let [error, seterror] = useState( " " )
//   let [isloading, setisloading] = useState( false )

//    useEffect( () => {
//     fetch("http://localhost:4000/products", {
//       method: "GET" } )
//       .then( (response) => {
//         if(response.ok){
//             return response.json();
//         }
//         else{
//             throw new Error ( " Search Proper Data")
//         }
//          } )
      
//       .then( (data) => { setproducts( data ); } )
//        .catch( (error) => { seterror(error.message );  } )
//          .finally( () => { setisloading( false ); } )

// }, []);
 let { products,error, isloading,setProducts } = useFetch( " http://localhost:4000/products" )

let handleDelete = (id) => {
   axios.delete( 'http://localhost:4000/products/${id}')
   .then( () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
      let newProductList = products.filter( product=>product.id !== id ) 
      setProducts(newProductList)
   })
}

if (isloading) {
  return <div>
        <h1>Loading....</h1>
    </div>
}


  return (
    <div>
        <article>
            <span> To Create New Product</span>
            <Button onClick={ ()=> navigate("/newProduct")}>Click Me!</Button>
        </article>
        <h1>ProductList</h1>
        {
            products.length !== 0 && (
        <section className='products'>
            {
                products.map( (product) => (
                    <Card key={product.id} style={{ width: '18rem' }} className='product'>
                        <center>

                    <Card.Img variant="top" src={product.image} style={{ width: '9rem' , height:"12rem"
                     }} />
                        </center>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <center>
                      ${product.price}

                            </center>
                      </Card.Text>
                     
                    </Card.Body>
                    <Card.Footer style={{ display: "flex", justifyContent: "space-evenly" , alignItems: "center" }}>
                       
                        <Button variant="primary"><FaShoppingCart /></Button>
                        <Button variant="secondary" onClick={ () => { navigate(`/update/${product.id}`) }}
                        ><FaEdit /></Button>
                        <Button variant="danger" onClick={ ()=> handleDelete(product.id) }
                        ><MdDelete /></Button>
                    </Card.Footer>
                  </Card>
                ))
            }
        </section>) 
        }
        {
            error && <p>
                {error}
            </p>
        }

    </div>
  )
}

export default ProductList