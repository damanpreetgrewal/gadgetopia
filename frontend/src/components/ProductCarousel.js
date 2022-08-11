import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const topRatedProducts = useSelector((state) => state.topRatedProducts);
  const { loading, error, products } = topRatedProducts;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="error">{error}</Message>
  ) : (
    <Carousel
      className="d-block w-100"
      pause="hover"
      fade
      keyboard
    >
      {products.map((product, i) => (
        <Carousel.Item key={product._id} id={i}>
          <Link to={`/product/${product._id}`}>
            <Image
              className="carousel-img img-fluid"
              src={product.image}
              alt={product.name}
              style={{
                 display: 'flex',
                 alignItems: 'center'
              }}
            />  
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
