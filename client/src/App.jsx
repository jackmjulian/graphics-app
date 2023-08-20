import Header from './components/Header';
import Order from './components/Order';
import OrderStats from './components/OrderStats';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <OrderStats />
        <Order />
      </div>
    </>
  );
}

export default App;
