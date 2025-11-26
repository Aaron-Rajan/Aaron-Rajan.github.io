import './App.css'
import Experience from './Components/Experience';
import Homepage from './Components/Homepage';
import {Routes, Route} from 'react-router-dom';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div>
      <NavBar/>
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/experience' element={<Experience/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App
