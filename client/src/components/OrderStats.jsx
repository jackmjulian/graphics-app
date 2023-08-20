import { useEffect, useState } from 'react';
import axios from 'axios';

function OrderStats() {
  const [orderCount, setOrderCount] = useState([]);
  const [orders, setOrders] = useState([]);
  const [yesterdaysOrders, setYesterdaysOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get('http://localhost:5001/api/orders');
      setOrderCount(response.data.data.length);
      setOrders(response.data.data);

      getYesterdaysOrders(response.data.data);
    };
    getOrders();
  }, []);

  const getYesterday = (date) => {
    const today = new Date(date);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday.toISOString().substring(0, 10);
  };

  const getYesterdaysOrders = (ordersData) => {
    const orderDates = ordersData.map((order) => order.date.substring(0, 10));
    const yesterday = getYesterday(new Date());

    setYesterdaysOrders(orderDates.filter((date) => date === yesterday));
  };
  console.log('yesterdays orders', yesterdaysOrders);

  return (
    <div className='order-stats'>
      <h4>Total Orders: {orderCount} </h4>
      <h4>Yesterdays Orders:{yesterdaysOrders.length} </h4>
    </div>
  );
}
export default OrderStats;
