import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/orders/${id}`
      );
      console.log(response.status);
      if (
        response.status === 204 &&
        window.confirm('Are you sure you want to delete this order?')
      ) {
        // the below filters out the id of the deleted order and returns a new array
        const updatedOrders = orders.filter((order) => order._id !== id);
        setOrders(updatedOrders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5001/api/orders');
        setOrders(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className='order-container'>
        <div className='card'>
          <div className='order-text'>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className='order-container'>
      {orders.map((order) => (
        <div className='card' key={order._id}>
          <button
            onClick={() => {
              handleDelete(order._id);
            }}
            className='close'
          >
            <FaTimes color={'purple'} />
          </button>
          <div className='order-text'>
            <p>Client: {order.client}</p>
            <p>Ref: {order.ref}</p>
            <p>Date: {order.date.substring(0, 10)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
