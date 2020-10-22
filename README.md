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
