import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/Dashboard/Dashboard/DashboardHome';
import MakeAdmin from './Pages/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import MakeDoctor from './Pages/Dashboard/Dashboard/MakeDoctor/MakeDoctor';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/appointment' element={<PrivateRoute>
              <Appointment />
            </PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} >

              <Route index element={<DashboardHome />} />
              <Route path='makeAdmin' element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              } />
              <Route path='makeDoctor' element={
                <AdminRoute>
                  <MakeDoctor />
                </AdminRoute>
              } />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
