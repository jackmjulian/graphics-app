import { useState } from 'react';
import axios from 'axios';
import Card from '../shared/Card';
import Button from '../shared/Button';

function OrderForm() {
  const initialOrderState = {
    client: '',
    ref: '',
  };
  const [order, setOrder] = useState(initialOrderState);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(order);
    try {
      await axios.post('http://localhost:5001/api/orders', order);
      alert('Order added successfully');
      setOrder(initialOrderState); // set back to empty initial order state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h2>Add New Order</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            id='client'
            name='client'
            placeholder='Client...'
          />
          <input
            onChange={handleTextChange}
            type='text'
            id='ref'
            name='ref'
            placeholder='Ref...'
          />
        <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
}
export default OrderForm;
