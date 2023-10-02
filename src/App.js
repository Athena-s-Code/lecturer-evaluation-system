import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Base/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Forbidden from "./components/Helper/Forbidden";
import Dashboard from "./components/Base/DashBoard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route
          path="/dashboard"
          element={
          
              <Dashboard />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
