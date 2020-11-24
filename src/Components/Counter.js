import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function Counter() {

    const [count, setCount] = useState(0);
    const [cash, setCash] = useState(100000);
    
    return (
      <div className="Counter">

          <h1>Cash Available : {cash} </h1>
       
      </div>
    );
  }




export default Counter;