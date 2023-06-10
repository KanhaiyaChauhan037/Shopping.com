import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Account/Login'
import SignIn from './Account/SignIn'
import AddProduct from './Admin/AddProduct'
import AllProducts from './Admin/AllProducts'
import Order from './Admin/Order'
import Users from './Admin/Users'
import Cart from './cart/Cart'
import Electronic from './Electronics/Electronic'
import Fashion from './Fashion'
import Grocery from './Grocery/Grocery'
import Home from './Home/Home'
import HomePro from './HomeProduct/HomePro'
import Mobile from './Mobile/Mobile'
import SinglePage from './SingleProduct/SinglePage'
import Admin from "./Admin/Admin"

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/singlepage/:id' element={<SinglePage />} />
      <Route path='/mobile' element={<Mobile />} />
      <Route path='/grocery' element={<Grocery />} />
      <Route path='/electronic' element={<Electronic />} />
      <Route path='/home' element={<HomePro />} />
      <Route path='/fashion' element={<Fashion />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/orders' element={<Order />} />
      <Route path='/admin/allproducts' element={<AllProducts />} />
      <Route path='/admin/addproducts' element={<AddProduct />} />
      <Route path='/admin/users' element={<Users />} />
    </Routes>
  )
}

export default Allroutes
