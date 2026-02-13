
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import Installments from './pages/Installments';
import OrderTracking from './pages/OrderTracking';
import PaymentSuccess from './pages/PaymentSuccess';
import Notifications from './pages/Notifications';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import SupplierRegister from './pages/auth/SupplierRegister';

// Buyer Pages
import BuyerAccount from './pages/buyer/Account';
import BuyerOrders from './pages/buyer/Orders';

// Supplier Pages
import SupplierDashboard from './pages/supplier/Dashboard';
import SupplierProducts from './pages/supplier/Products';
import SupplierInventory from './pages/supplier/Inventory';
import SupplierOrders from './pages/supplier/Orders';
import SupplierPayments from './pages/supplier/Payments';
import SupplierLogistics from './pages/supplier/Logistics';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/installments" element={<Installments />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          {/* Public Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/supplier/register" element={<SupplierRegister />} />

          {/* Buyer Routes */}
          <Route path="/buyer/account" element={<BuyerAccount />} />
          <Route path="/buyer/orders" element={<BuyerOrders />} />

          {/* Supplier Routes */}
          <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
          <Route path="/supplier/products" element={<SupplierProducts />} />
          <Route path="/supplier/inventory" element={<SupplierInventory />} />
          <Route path="/supplier/orders" element={<SupplierOrders />} />
          <Route path="/supplier/payments" element={<SupplierPayments />} />
          <Route path="/supplier/logistics" element={<SupplierLogistics />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
