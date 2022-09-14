import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api' 

export const login=createAsyncThunk('admin/login',async({formData,navigate},{rejectWithValue})=>{
    try{
        const responce=await api.logIn(formData)
            navigate("/admindashboard")
            return responce.data
         
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const logout=createAsyncThunk('admin/logout',async({navigate})=>{
    navigate('/adminlogin')
    return null
} )

export const tockenValidator=createAsyncThunk('admin/tockenValidator',async({navigate},{rejectWithValue})=>{
    try{
        const responce=await api.validateTocken()
            navigate('/admindashboard')
            return responce.data
        
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )
//<----------------------------------------------------------------------------------------------------------------
const adminSlice=createSlice({
    name:'admin',
    initialState:{
        adminInfo:null,
        error:"",
        loading:false,
    },
    extraReducers:{

        [login.pending]:(state,action)=>{
            state.loading=true
            state.error='' 
        },
        [login.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem('adminTocken',JSON.stringify(action.payload.adminTocken));
            const {adminTocken,...data}=action.payload
            state.adminInfo=data
        },
        [login.rejected]:(state,action)=>{
            state.loading=true
            state.error='Log in Error' 
        },
        [logout.pending]:(state,action)=>{
            state.loading=true
            state.error='' 
        },
        [logout.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.removeItem('adminTocken');
            state.adminInfo=null
        },
        [logout.rejected]:(state,action)=>{
            state.loading=true
            state.error='Log out Error' 
        },
        [tockenValidator.pending]:(state,action)=>{
            state.loading=true
            state.error='' 
        },
        [tockenValidator.fulfilled]:(state,action)=>{
            state.loading=false
            state.adminInfo=action.payload
        },
        [tockenValidator.rejected]:(state,action)=>{
            state.loading=true
            state.error='Tocken Validation Failed' 
        },
    }

}) 
;
export default adminSlice.reducer