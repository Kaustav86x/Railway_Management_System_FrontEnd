import './App.css';
import Navbar from './Home/Navbar';
import Login from './User/login';
import Body  from './Body/Body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path='Login' element={<Login/>}></Route>
        </Routes>
      </Router>
      <Body></Body>
    </>
  );
  
}

export default App;
