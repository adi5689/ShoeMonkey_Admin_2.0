import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';
import EditProduct from '../components/EditProduct';
import Home from '../components/Home';


const Admin = () => {
 return (
    <div className='bg-gradient-to-r from-black via-purple-900 to-black lg:flex'>
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
    </div>
 );
};

export default Admin;
