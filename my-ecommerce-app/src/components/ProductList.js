// ProductList.js
import React, {useEffect, useState} from 'react';
import Product from './Product';

const ProductList = ({onAddToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/products')
    .then(response => {return response.json()})
    .then(products => {setProducts(products)})
    // .then(console.log)
    .catch(error=>{console.error('Caught error: ', error)});
  }, [])

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
