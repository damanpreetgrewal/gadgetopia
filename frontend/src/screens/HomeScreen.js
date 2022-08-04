import React, { useEffect } from "react";
import Slider from "../components/Slider";
import { useDispatch } from "react-redux";
import Features from "../components/Features";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/ProductCarousel";
import { Link } from "react-router-dom";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  console.log(keyword, pageNumber);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <Slider />
      {!keyword ? (
        <>
          <h1
            className="hot"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            Hot Products{" "}
            <i style={{ color: "#E02401" }} className="fab fa-hotjar"></i>
          </h1>
          <ProductCarousel />
          <Features />
        </>
      ) : (
        <Link
          to="/"
          className="btn btn-outline-dark"
          style={{ marginTop: "20px" }}
        >
          <i className="far fa-hand-point-left"></i> Go Back{" "}
        </Link>
      )}
      {/* <h1 className="latest-prods">Latest Products</h1> */}
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error} <i className="fas fa-exclamation-triangle"></i>
        </Message>
      ) : (
        <>
          <Row style={{background:"rgb(250,250,250)"}}>
            {products.map((product) => {
              return (
                <Col
                  className="body"
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
          
        </>
      )} */}
    </>
  );
};

export default HomeScreen;
