import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

const ShopScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  console.log(keyword, pageNumber);

  const dispatch = useDispatch();

  const productList = useSelector((state) => {
    return state.productList;
  });

  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <Container>
      <Meta />
      <h1 className="latest-prods">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error} <i className="fas fa-exclamation-triangle"></i>
        </Message>
      ) : (
        <>
          <Row>
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
      )}
    </Container>
  );
};

export default ShopScreen;
