import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Header from './components/layout/Header'
import ProductList from "./pages/ProductList";
import Footer from "./components/layout/Footer";
import Features from "./components/layout/Feature";

export default function App() {
  return (
    <>
        <Header />
        <div className="container mx-auto px-4 py-4">
          <Features />
          <ProductList />
        </div>
      <Footer />
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </>
  )
}
