import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import '../pages/Singleproduct.css';
import { useDispatch } from 'react-redux';
import { additemwish } from '../redux/slice/wishSlice';
import { additem } from '../redux/slice/cartSlice';
export default function SingleProduct() {

    let {id} = useParams();
    // console.log(id)
 const [x, setx] = useState([]);

 const dispatch = useDispatch();
    
 const singledatafetch = async ()=>{
  try {
    const response = await axios.get(`https://677f586f0476123f76a60be7.mockapi.io/product/${id}`);
     setx(response.data);
 } catch (error) {
     console.log(error);
 }
 }

useEffect(()=>{
  singledatafetch()
},[id])

  const addToWishlist = (product) => {
    dispatch(additemwish(product));
  };

  const addToCart = (product) => {
    dispatch(additem(product));
  };

  return (

    <div className="card-body">
      <div className="product-card">
  <img src={x.image} alt={x.name} className="product-img" />
  <div className="product-info">
    <h2 className="product-title">{x.title}</h2>
    <p className="product-category">{x.category}</p>
    <p className="product-description">{x.description}</p>
    <p className="product-price">${x.price}</p>
    <div className="button-group">
      <Link
        to={"/wish/"}
        className="btn btn-dark"
        onClick={() => addToWishlist(x)}
      >
        Wish-Product
      </Link>
      <Link
        to={"/cart/"}
        className="btn btn-dark"
        onClick={() => addToCart(x)}
      >
        Add to Cart
      </Link>
    </div>
  </div>
</div>

          {/* <img src={x.image} alt={x.name} style={{ width: '200px' }} />
          <p>{x.title}</p>
          <p>{x.category}</p>
          <p>{x.description}</p>
          <p>{x.price}</p>
                  <Link
                    to={"/wish/"}
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to Wishlist");
                      
                    }}
                  >
                    Wish-Product
                  </Link>

                  <Link
                    to={"/cart/"}
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      
                    }}
                  >
                    Add to Cart
                  </Link> */}

                </div>

  

  
  )
}
