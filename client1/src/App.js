import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import SignUp from './components/signup_signin/SignUp';
import Cart from './components/Cart/Cart';
import Buynow from './components/Buynow/Buynow';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbaar />
    <Newnav />
    {/* to create sign in sign up pages */}
    <Routes>
      {/* the words login and register are used to open the respective pages */}
      <Route path="/" element={<Maincomp />}/>
      <Route path="/login" element={<Sign_in />}/>
      <Route path="/register" element={<SignUp />}/>
      {/* if we click on an item, this id opens it up and show  */}
      <Route path="/getproductsone/:id" element={<Cart/>}/>
      <Route path="/buynow" element={<Buynow/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;



