import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailPage from "./pages/user/UserCartDetailPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent"
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrdersDetailPage from "./pages/admin/AdminOrdersDetailPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import ScrollToTop from "./utils/ScrolToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-detail" element={<ProductDetailsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element="Page not exist 404" />
        </Route>


        {/* User Protected Routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/orders" element={<UserOrderPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailPage />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/user" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/create-new-products" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/order-details" element={<AdminOrdersDetailPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>

      <FooterComponent />

    </BrowserRouter>
  );
}

export default App;
