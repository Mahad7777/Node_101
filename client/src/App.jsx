import { Routes, Route } from 'react-router-dom';
import { Protectedroutes } from '../utils/Protectedroutes';
import SignupForm from './pages/signup';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import UserContextProvider from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true; 
const App = () => {
  return (
    <UserContextProvider>
    <Toaster position='top-center' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route element={<Protectedroutes/>}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </UserContextProvider>
  );
};

export default App;
