
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Installments from './pages/Installments';
import OrderTracking from './pages/OrderTracking';
import SupplierDashboard from './pages/supplier/Dashboard';
import SupplierProducts from './pages/supplier/Products';
import SupplierOrders from './pages/supplier/Orders';
import SupplierPayments from './pages/supplier/Payments';
import SupplierLogistics from './pages/supplier/Logistics';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/installments" element={<Installments />} />
        <Route path="/tracking" element={<OrderTracking />} />

        {/* Supplier Routes */}
        <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
        <Route path="/supplier/products" element={<SupplierProducts />} />
        <Route path="/supplier/orders" element={<SupplierOrders />} />
        <Route path="/supplier/payments" element={<SupplierPayments />} />
        <Route path="/supplier/logistics" element={<SupplierLogistics />} />
        {/* We will add more routes here for Supplier Dashboard components */}
      </Routes>
    </Router>
  );
};

export default App;
