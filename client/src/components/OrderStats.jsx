import { useEffect, useState } from 'react';
import axios from 'axios';

function OrderStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const ordersLength = async () => {
      const response = await axios.get('http://localhost:5001/api/orders');
      setStats(response.data.data.length);
    };
    ordersLength();
  }, []);

  return <div className='order-stats'>Total Orders: {stats} </div>;
}
export default OrderStats;
