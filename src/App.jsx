// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/index';
import Signup from './pages/SignUpPage/index'
import Main from './pages/MainPage/index'
import Festival from './pages/FestivalPage/index'
  
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/content" element={<Festival/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
