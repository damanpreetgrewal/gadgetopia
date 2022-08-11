import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import cartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UsersListScreen from "./screens/UsersListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import EditProductScreen from "./screens/EditProductScreen";
import OrdersListScreen from "./screens/OrdersListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentMethodScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={cartScreen} />
        <Route path="/admin/usersList" component={UsersListScreen} />
        <Route exact path="/admin/productlist" component={ProductListScreen} />
        <Route
          exact
          path="/admin/productlist/:pageNumber"
          component={ProductListScreen}
        />
        <Route path="/admin/orderlist" component={OrdersListScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/product/:id/edit" component={EditProductScreen} />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route exact path="/page/:pageNumber" component={ShopScreen} />
        <Route
          exact
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
        />
        <Route exact path="/shop" component={ShopScreen} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/" component={HomeScreen} />
      </main>
      <Footer1 />
      <Footer2 />
    </Router>
  );
};

export default App;
