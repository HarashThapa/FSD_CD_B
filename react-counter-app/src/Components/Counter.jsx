import React, { useEffect, useState, useState1 } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    function handleIncrement(){
        setCount(count+1);

    }
    function handleDecrement(){
        setCount(count-1);
    }
    useEffect(()=>{
        setCount1(count*10);

    })
  return (
    <div>
      <h1>Counter App</h1>
      <h1>Counter:{count}</h1>
      <h1>Counter1:{count1}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
     
    </div>
 );
}

export default Counter