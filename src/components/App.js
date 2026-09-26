
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1 style={{marginBottom:"10px"}}>Parent Component</h1>
      <ChildComponent1 onOptionChange={setSelectedOption}/>
      <ChildComponent2 onOptionChange={setSelectedOption}/>
      <p style={{marginTop:'10px'}}>selectedOption: {selectedOption}</p>
    </div>
  )
}

export default App
