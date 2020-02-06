import React from 'react';
import Counter from './Counter.js';

function App() {
  return (
    <div>
      <h4 style={{color: ''}}>
        Welcome to my App! This text lives in the parent component
      </h4>
      {/* Render our child component, and pass it a prop */}
      <Counter initCounter={0}/> 
    </div>
   
  );
}

export default App;
