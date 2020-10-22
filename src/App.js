import React from 'react';
import './App.css';
import Person from'./Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello, I am a React app</h1>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29">My hobbies: racing</Person>
      <Person name="Stephanie" age="26"/>
    </div>
  );
}

export default App;
