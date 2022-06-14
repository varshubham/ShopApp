
import Addshop from './Components/Addshop';
import Navbar from './Components/Navbar';
import Shops from './Components/Shops';
import Areas from './Components/Areas';
import Category from './Components/Category';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Shops/>}/>
      <Route exact path = '/shops' element={<Shops/>}/>
      <Route exact path='/add' element={<Addshop/>}/>
      <Route exact path='/area/:area' element={<Areas/>} />
      <Route exact path='/category/:category' element={<Category/>} />
    </Routes>
    
    
    </Router>
    </>
  );
}

export default App;
