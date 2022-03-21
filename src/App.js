import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CheckOut from './components/pages/CheckOut';
import SignIn from './components/pages/SignIn';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './components/config/firebaseConfig';
import { useStateValue } from './components/context/StateProvider';
import PasswordReset from './components/pages/PasswordReset';
import Payment from './components/pages/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/pages/Orders';

const promise = loadStripe(
  "pk_test_51KfPD7D7DXh7YOooe6aLJ0jzJnqSHb3Wt7sMgzxMMXJ45GLNcwOiiQvBlKCE1VntPzyja5Hk4RpB4TiPHEH6aHTS00LEpaShuP"
);

function App() {

  const [{user}, dispatch] = useStateValue();
  console.log(user)
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication,(authUser) => {
       console.log(authUser.email);
         if(authUser){
            dispatch({
              type: "SET_USER",
              payload: authUser,
            });
         }else{
            dispatch({
              type: "SET_USER",
              payload: null,
            });
         }
    })
    return () => {
      unsubscribe();
    }
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/card/checkout"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/password/reset" element={<PasswordReset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
