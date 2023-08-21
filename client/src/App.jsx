import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Order from './components/Order';
import OrderStats from './components/OrderStats';
import OrderForm from './components/OrderForm';
import AboutIconLink from './components/AboutIconLink';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <OrderForm />
                <OrderStats />
                <Order />
                <AboutIconLink />
              </>
            }
          ></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
