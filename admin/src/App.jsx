import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";

const App = () => {
  const url = "http://food-delivery-backend-p55h.onrender.com";

  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    const token = localStorage.getItem("adminToken")
    if(token) {
      setIsAuthenticated(true)
    }
  },[])

  const handleLogin = (token) => {
    localStorage.setItem("adminToken",token);
    setIsAuthenticated(true);
    navigate('/')
  }


  return (
    <div>
      <ToastContainer />
      {isAuthenticated ? (
        <>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          {/* <Route path="*" element={<Navigate to="/admin-login" replace/>}/> */}
          <Route path="/" element={<AdminLogin url={url} onLogin={handleLogin}/>}/>
        </Routes>
      )}
    </div>
  );
};

export default App;
