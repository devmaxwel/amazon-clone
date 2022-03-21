import React, { useEffect} from "react";
import "./orders.css";
import { useStateValue } from "../context/StateProvider";

const Orders = () => {
 
  const [{ user }] = useStateValue();

  useEffect(() => {
    
  }, [user?.uid]);

  return (
    <div className="orders">
      <div className="orders__order">
          {
              
          }
      </div>
    </div>
  );
};

export default Orders;
