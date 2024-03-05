import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./pages/Login";
import AuthProtected from "./routes/AuthProtected";
import Utenti from "./components/Utenti";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <AuthProtected>
              <AdminDashboard />
            </AuthProtected>
          }
        />
        <Route
          path="/utenti"
          element={
            <AuthProtected>
              <Utenti />
            </AuthProtected>
          }
        />
        <Route
          path="/petinfo"
          element={
            <AuthProtected>
              <PetInfo />
            </AuthProtected>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
