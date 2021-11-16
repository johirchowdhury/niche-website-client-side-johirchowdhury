import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import Register from './Pages/Login/Register/Register';
import Products from './Pages/Home/Products/Products';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Order from './Pages/Deshboard/Orders/Order';
import HomeProducts from './Pages/Home/HomeProducts/HomeProducts';
import AddReview from './Pages/Home/AddReview/AddReview';
import UserDeshboard from './Pages/UserDeshboard/UserDeshboard/UserDeshboard';
import Payment from './Pages/UserDeshboard/Payment/Payment';
import MyOrder from './Pages/UserDeshboard/MyOrder/MyOrder';
import MyReview from './Pages/UserDeshboard/MyReview/MyReview';
import AddProducts from './Pages/UserDeshboard/AddProducts/AddProducts';
import ManageOrders from './Pages/UserDeshboard/ManageOrders/ManageOrders';
import ManageProduct from './Pages/UserDeshboard/ManageProduct/ManageProduct';
import MakeAdmin from './Pages/UserDeshboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/productDetails/:serviceId">
            <ProductDetails></ProductDetails>
          </Route>
          <PrivateRoute path="/deshboard">
            <Deshboard></Deshboard>
          </PrivateRoute>
          <PrivateRoute path="/AddProducts">
            <AddProducts></AddProducts>
          </PrivateRoute>
          <PrivateRoute path="/orders/:serviceId">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <Route path="/product">
            <Products></Products>
          </Route>
          <Route path="/topProducts">
            <HomeProducts></HomeProducts>
          </Route>

          <PrivateRoute path="/userDeshboard">
            <UserDeshboard></UserDeshboard>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/myorder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <MyReview></MyReview>
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
