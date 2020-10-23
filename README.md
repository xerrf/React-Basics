This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Notes

## Next Gen JS
React uses next gen JavaScript in some of its syntax, so it is good to have an understanding of some ES6 features. 

### `let` and `const`
These two keywords replace the `var` keyword. 
* `let` is used for variables that will change
* `const` is used for variables that should never change

### Arrow Functions
These always intimidated me, but they aren't so bad. 

In old JS, you write a functions as `function myFunction() {...}`, but arrow functions simplify this. 

With ES6, you can just write `const > myFunction = () => {...}`. Here, we are assigning a function value to a propery. The parenthesis `()` is the argument list. If there are no arguments, it must be written. If there is *only* one argument, the parenthesis cane be dropped. Similarly, if the function *only* returns a value, then the curly braces and keyword (`{return}`) can be dropped. 

So `const multiply = number => number * 2` takes one parameter (`number`) and returns that value multiplied by two. 

 Note that using arrow functions helps with the `this` keyword issues that would occur in the older syntax. 

### Exporting and Importing Modules
You can connect files exporting and importing them. This helps with organization. Let's say we have two files in which we are exporting
```
// Person.js
const person = {name:"Ben"};

export default person;

// Utility.js
export const clean = () => {...};

export const baseDate = 10;
```
You can either export as `default`, meaning that you will get that object when you import from that file without specifying anything else. Or, you can export individual objects or functions. Then, when you want to use them
```
import Person from './Person.js';    // Note: the name is up to you since by default the whole object is exported.
import prs from './Person.js';       // The name is how you will refer to it in this file. 

import {clean} from './Utility.js'      // Use {} to specify import
import {baseData} from './Utility.js'
```

### Classes 
ES6 uses the `class` keyword to make a class, and inheritence is supported with the `extends` keyword. Properties are variables assigned to a class or object. Likewise, methods are functions attached to a class or object. Writing new JS means that we don't have to use constructores anymore. Functions can be assigned to properties. 

```
class Person extends Human {
    name = "Bob";
    printName = () => {console.log(this.name)};
}
```

### Spread and Rest Operator (`...`)
The spread operator references array elements or object properties to be used elsewhere.
```
const oldArr = [1, 2, 3];           #[1, 2, 3]
const newArr = [...oldArr, 4, 5];   #[1, 2, 3, 4, 5]
```
or
```
const oldObj = {    // Only has name as a property
    name:"Bob"
};

const newObj = {    // Has name and newProp as a property
    ...oldObj,
    newProp: 0
};
```

The rest operator is used to merge a list of function arguments into an array, so they can be references as an array does.
`function sortArg(...args) { console.log(args[0]) };`

### Destructuring
We can destructure (*not* destruct or destroy) objects. In other words, we can easily extracting array elements or object properties. This is different from the spread operator because with this, we can pull out single elements from arrays or objects. 

In array destructuring, we assign array elements to variables:
```
[a,b] = ["Hello", "Bob"];
console.log(a)  // Hello
console.log(b) // Bob
```

In object destructuring, we assign properties to other properties. Note that they are assigned by property name.
```
{name} = {name: "Bob", age = "23"}
console.log(name)   // Bob
console.log(age)    // undefined <- this is because only the named property is destructured
```

### Primitive and Reference Types
Strings, Booleans, Ints, ect are primitive types, meaning that when they are stored to variables, the value is copied. An example of this would be if we `let a = 1`, and then `let b = a`, then the value of `1` is copied to `b`. 

Classes, Objects, and Arrays are reference types, meaning that their values are stored in memory with a pointer to it. So if we have
```
const person = {name:"Bob"};
const person2 = person;
```
Then the pointer to `{name:"Bob"}` is copied to the `person2` object. To actually copy the object (or array), we can use the spread operator!

## React Base Features and Syntax
There is usually only one component that is rendered by the `ReactDOM.render()` function. This component can have nested components though. **A React component is basically a JS function that returns JSX.** It can be a class, but doesn't have to be. Remember to import the correct libraries! Components are meant to be reusable.

There are two ways to create components. The first is with class-based components. 
```
import React {Component} from 'react';

class myApp extends Component {
    render() {
        return (
            <div className="myClass">
                <p>Hello, Bob.</p>
            </div>
        );
    }
}

export default myApp;

```

The second way is using functional components.
```
const myComp = () => {
    return(
        <div>
            <p>Hello, Bob.</p>
        </div>
    );
}
```

Is is important that the JSX expression only have **one root element**, so just wrap everything in a `<div>`.

### JSX
Though it looks like the component above is returning HTML, it is actually JSX. This is important to be aware of, but beyond that, I'm not sure why it matters. Note that above `className="myClass` is not in HTML syntax. This is a sign that is is JSX. Since `class` is a keyword in JS, we can't use it in other contexts, so the JSX `className` is the equivalent.

JSX gets compiled into HTML using `React.createElement()`, which has the HTML element you want to create, properties you want to give it, and an unlimited amount of children as arguments. So, the above JSX can be reproduce like this:
```
React.createElement(div, className="myClass", React.createElement(p, , "Hello, Bob."));
```
But isn't that `<p>` a child of the `<div>`? Why the second `React.createElement()` call? If we did this:
```
React.createElement(div, className="myClass", "Hello, Bob.");
```
The HTML would look like
```
<div class="myClass">
    Hello, Bob.
</div>
```

### Props
I definitevly don't have `props`, but React does! With `props`, you can set content for a component as if you were setting HTML attributes.
```
import Person from './Person.js';
<Person name="Bob" age="23" />
```
Then, in that component's JS file, we specify where this dynamic content should appear using `props`
```
const person = (props) =>{
    <p>I am {props.name} and am {props.age} years old.</p>
}
export default person
```
We can also pass children through `props.children`. So if we had `<Person ...>I like cheese</Person>`, we can access the "I like cheese" (which is the child) by writing the following in our component's return statement
```
return(
    <div>
        <p>...</p>
        <p>{props.children}</p>
    </div>
);
```

### State
State is managed from inside a component. Though you can use state in functional components using Hooks, the established way is using state with class-based components. The state is basically a property of that component. 

#### Class-based component State with `setState()`
```
class App extends Component {
  state = {
    persons: [
      {name: "Bob", age: 23},
      {name: "Randers", age: 25},
      {name: "Stephanie", age: 22}
    ],
    otherState: "Other"
  }

  switchNameHandler = () => {
      // DON'T DO THIS: this.state.persons[0].name = "Bobabillion", instead, use this.setState()
      this.setState( {
        persons: [
          {name: "Bobabillion", age: 23},
          {name: "Randers", age: 25},
          {name: "Stephanie", age: 24}
        ]
      } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I am a React app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

  }
}
```
Note that `setState()` merges the `state` property with its argument. This means that it will overwrite matching objects. So above, the `persons` array is overwritten, but `otherState` is untouched. 

#### Functional Component State with `useState()`
Note than the `this` keyword is removed because it is no longer a class.
```
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
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
  );
 }
 ```
In functional components, the `useState()` function **replaces** the state. It does not merge them. So above, the `otherState` object would be deleted. To get around this, you can have multiple "state slices" and use `useState()` on them individually. 

`useState()` returns an array with two elements. The first is the current state. The second is a function that allows us to update the state. In the above example, deconstructing is used. 

### Event Handling


}----<=============================================>----{

# Generated React ReadMe

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
