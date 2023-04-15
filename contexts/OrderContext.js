// In a higher-order component, create a context to store the array of objects
import { createContext, useState } from 'react';

export const OrderContext = createContext();

function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
