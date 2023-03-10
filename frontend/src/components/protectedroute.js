import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = () => {
  const  auth = localStorage.getItem('isAuthenticated');
  
return (
    auth==='true' ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectedRoutes;