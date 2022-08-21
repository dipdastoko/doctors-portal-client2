import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
