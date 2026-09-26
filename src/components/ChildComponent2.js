import React from 'react'

const ChildComponent2 = ({onOptionChange}) => {

    

  return (
    <div className='child2-card'>
        <h1 style={{marginBottom:'10px'}}>ChildComponent2</h1>
        <button className='btn' onClick={()=>onOptionChange(`option 2`)}>option 2</button>
    </div>
  )
}

export default ChildComponent2
