import Header from './components/Header';
import Order from './components/Order';
import OrderStats from './components/OrderStats';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <OrderForm />
        <OrderStats />
        <Order />
      </div>
    </>
  );
}

export default App;
