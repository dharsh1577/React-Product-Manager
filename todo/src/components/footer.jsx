

import React from 'react';



function Footer() {

    return <footer>Footer</footer>;

}



export default Footer;

// useEffect( () => {
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

// if (isloading) {
//   return <div>
//         <h1>Loading....</h1>
//     </div>
// }


//   return (
//     <div>
//         <h1>ProductList</h1>
//         {
//             products.length !== 0 && (
//         <section className='products'>
//             {
//                 products.map( (product) => (
//                     <Card key={product.id} style={{ width: '18rem' }} className='product'>
//                         <center>

//                     <Card.Img variant="top" src={product.image} style={{ width: '9rem' , height:"12rem"
//                      }} />
//                         </center>
//                     <Card.Body>
//                       <Card.Title>{product.tittle}</Card.Title>
//                       <Card.Text style={{ overflow: "scroll", height: "200px" }} >
//                        {product.description}
//                       </Card.Text>
                     
//                     </Card.Body>
//                     <Card.Footer style={{ display: "flex", justifyContent: "space-evenly" , alignItems: "center" }}>
//                         <Card.Text >
//                             ${product.price}
//                         </Card.Text>
//                         <Button variant="primary">Add to Card</Button>

//                     </Card.Footer>
//                   </Card>
//                 ))
//             }
//         </section>) 
//         }
//         {
//             error && <p>
//                 {error}
//             </p>
//         }

//     </div>
//   )
// }

// export default ProductList