import './App.css';
import { Navbar } from './Home/Navbar';
import Login  from './User/Login';
import { Body } from './Body/Body';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Login></Login>
      <Body></Body>
    </>
  )
}

export default App;
