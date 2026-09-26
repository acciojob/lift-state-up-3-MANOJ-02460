import React from 'react'

const ChildComponent1 = ({onOptionChange}) => {
  return (
    <div className='child1-card'>
        <h1 style={{marginBottom:'10px'}}>ChildComponent1</h1>
        <button className='btn' onClick={()=> onOptionChange(`option 1`)}>option 1</button>
    </div>
  )
}

export default ChildComponent1