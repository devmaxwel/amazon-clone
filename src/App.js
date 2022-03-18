import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CheckOut from './components/pages/CheckOut';

function App() {
  return (
    <div className="App">
      <Router> 
         <Header />
         <Routes>
           <Route path='/' element={ <Home />} />
           <Route path='/checkout' element={<CheckOut />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
