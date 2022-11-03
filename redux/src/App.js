
import './App.css';
import { Home } from './Home';
import {Provider} from 'react-redux'
import { store } from './store';
import NavBar from "./NavBar"
import CartProducts from './CartProducts'
import { FavoriteItem } from './FavoriteItem';
import Login from "./Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Mobile } from './Mobile';
import { Laptop } from './Laptop';
import { Camara } from './Camara';
import { Tv } from './Tv';



function App() {
  return (
    <div >
       <Provider store={store}>
      < BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='navbar' element={ <><NavBar/><Home/></>}/> 
        <Route path='addfav' element={<><NavBar/><FavoriteItem/></>}/>
        <Route path='addcart' element={<><NavBar/><CartProducts/></>}/>
        <Route path='mobile' element={<><NavBar/><Mobile/></>}></Route>
        <Route path='laptop' element={<><NavBar/><Laptop/></>}></Route>
        <Route path='camara' element={<><NavBar/><Camara/></>}></Route>
        <Route path='tv' element={<><NavBar/><Tv/></>}></Route>
      </Routes> 
      </BrowserRouter>
      </Provider>  
      
    </div>
  );
}

export default App;
