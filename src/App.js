import React, {Component} from 'react'; // Class components
//import React, {useState} from 'react';  // Functional components with Hooks
import './App.css';
import Person from'./Person/Person';

// Class-based component

class App extends Component {
  state = {
    persons: [
      {name: "Bob", age: 23},
      {name: "Randers", age: 25},
      {name: "Stephanie", age: 22}
    ],
    otherState: "Other"
  }

  switchNameHandler = (newName) => {
      //console.log("Click");
      // DON'T DO THIS: this.state.persons[0].name = "Bobabillion"
      this.setState( {
        persons: [
          {name: newName, age: 23},
          {name: "Randers", age: 25},
          {name: "Stephanie", age: 24}
        ]
      } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Bob", age:23},
        {name: event.target.value, age: 24},
        {name: "Stephanie", age:26}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: 'solid blue thin',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, I am a React app</h1>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, "Bobabillion")} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}  />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Bobabillion")}
          changed={this.nameChangeHandler} >My hobbies: racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

  }
}

export default App;

 // Functional Component equivalent
 /*
 const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Bob", age: 23},
      {name: "Randers", age: 25},
      {name: "Stephanie", age: 22}
    ],
    otherState: "Other"
  });

  const switchNameHandler = () => {
    //console.log("Click");
    // DON'T DO THIS: this.state.persons[0].name = "Bobabillion"
    setPersonsState( {
      persons: [
        {name: "Bobabillion", age: 23},
        {name: "Randers", age: 25},
        {name: "Stephanie", age: 24}
      ]
    } )
}

  return (
    <div className="App">
        <h1>Hello, I am a React app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}  />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
  );
 }

 export default App;
*/