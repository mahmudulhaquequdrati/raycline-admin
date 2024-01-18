import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
