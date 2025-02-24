import React, { useRef } from 'react'

const Refex = () => {
    const refcount=useRef(0);
    function handleIncreament(){
        refcount.current++;
        console.log("RefCount=",refcount.current);
        if(refcount.current=5)
            alert("RefCount="+ refcount.current)
        
    }
  return (
    <div>
        <h1>useRef Example</h1>
        <h2>RefCount={refcount.current}</h2>
        <button onClick={handleIncreament}>Increament</button>
    </div>
  )
}

export default Refex