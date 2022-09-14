import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import AdminLogin from '../components/adminlogin/AdminLogin'
import {useNavigate} from 'react-router-dom'
import { tockenValidator } from '../store/features/adminSlice'
function AdminLoginPage() {
  const dispatch=useDispatch()
  const tocken=localStorage.getItem("adminTocken")
  const navigate=useNavigate()
  useEffect(()=>{
    if(tocken){
      dispatch(tockenValidator({navigate}))
    }
  },[tocken])
  return (
    <div>
      <AdminLogin/>
    </div>
  )
}

export default AdminLoginPage
