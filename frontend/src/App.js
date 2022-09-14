
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import AdminLoginPage from './pages/AdminLogin'
import AdminDashBoard from "./pages/AdminDashBoard";
import Protected from "./components/protector/Protected";
import LandingPage from "./pages/LandingPage";
import { tockenValidator } from "./store/features/adminSlice";


function App() {
  const [isLoggedIn,setIsLogedIn]=useState(false)  
  const {adminInfo} =useSelector((state)=>({...state.admin}))
  useEffect(()=>{
    adminInfo?setIsLogedIn(true):setIsLogedIn(false)
  },[adminInfo])
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/adminlogin" element={<AdminLoginPage/>} />
      <Route exact path="/admindashboard" element={
      <Protected isLoggedIn={isLoggedIn}>
      <AdminDashBoard/>
      </Protected>} />
      </Routes>
    </Router> 
  ); 
}

export default App;
