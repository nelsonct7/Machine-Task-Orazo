import axios from 'axios'
const API = axios.create({baseURL:'http://localhost:5000'});
export const logIn=(formData)=>API.post('/admin/login',{...formData}) 
export const getRequirements=()=>API.get('/admin/getrequirements',{headers:{tocken:localStorage.getItem('adminTocken')}})
export const submitRequirements=(formData)=>API.post('/user/submitform',{...formData})
export const validateTocken=()=>API.get('/admin/validatetocken',{headers:{tocken:localStorage.getItem('adminTocken')}})