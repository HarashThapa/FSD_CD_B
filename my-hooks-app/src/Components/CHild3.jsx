import React, { useContext } from 'react'
import { StudentContext } from './Contextex';
const CHild3 = () => {
    const stu=useContext(StudentContext);
  return (
   <div>
     <h1>CHild3 Componebt</h1>
    <h2>
        Name={stu.name}<br/>
        Age={stu.age}
    </h2>
   </div>
  )
}

export default CHild3