import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ForgotPassword from "./pages/FotgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={path.PRODUCTS_LIST} element={<ProductList />} />
          <Route path={path.PRODUCTS_DETAIL} element={<ProductDetail />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
