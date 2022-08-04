import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar
        style={{ boxShadow: "0 10px 5px 2px rgba(0,0,0,0.16)" }}
        className="brand_body"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="brand">
              <img src="/images/gadgetopia.png" alt="logo"></img>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Route
              render={({ history }) => {
                //console.log('history: ',history);
                return <SearchBox history={history} />;
              }}
            /> */}
            <Nav className="ms-auto">
              <LinkContainer to="/Shop">
                <Nav.Link className="nav_profile">
                  <i className="fas fa-user"></i> Shop
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav_profile">
                  <i className="fas fa-user"></i> About US
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav_profile">
                  <i className="fas fa-user"></i> CONTACT US
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link className="nav_cart">
                  <i className="fas fa-shopping-cart"></i> Cart{" "}
                  {cartItems.length !== 0 &&
                    `(${cartItems.reduce((acc, item) => acc + item.qty, 0)})`}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown
                  className="nav_profile"
                  title={userInfo.name}
                  id="username"
                >
                  {/* <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      {" "}
                      Profile <i className="fas fa-user"></i>
                    </NavDropdown.Item>
                  </LinkContainer> */}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout <i className="fas fa-sign-out-alt"></i>{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="nav_profile">
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  className="nav_admin"
                  title="Manage"
                  id="adminMenu"
                >
                  <LinkContainer to="/admin/userslist">
                    <NavDropdown.Item>
                      {" "}
                      Users <i className="fas fa-users"></i>
                    </NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>
                      {" "}
                      Products <i className="fas fa-tablet-alt"></i>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>
                      {" "}
                      Orders <i className="fas fa-hand-holding"></i>
                    </NavDropdown.Item>
                  </LinkContainer> */}
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
