import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Cart from './Cart';



function App() {
    return (
        <>
      <div>
     
        <BrowserRouter>
        
         
<Routes>
    <Route path="" element={<HomePage/>}> </Route>

    <Route path="/LoginPage" element={<LoginPage/>}></Route>

    <Route path="/ProductDetail" element={<ProductDetail/>}></Route>

    <Route path="/Cart" element={<Cart/>}></Route>
</Routes>

        </BrowserRouter>







</div>

      
        
</>
        
    
     
    );
  }
  
  export default App;
  