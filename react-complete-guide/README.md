JSX is compiled to React.createElement, thats why we need to import React:
```
class App extends Component {
  render() {
    // This is the same
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
    // as
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world'));
  }
}
```

Pass props and inner content:
```
<Person name="Alex" age=30>My nickname is Ali</Person>
<p>My name is {props.name} and Im {props.age} years old </p>
<p>{props.children}</p>
```

## Hooks
- React > 16.8 uses hooks, which makes it possible to have state in functional components.
- useState is the hook that allows us to manage state in a functional component.
- useState returns an array with a state object and a function to change state.
- destructure like so: const [personState, setPersonState] = useState({name:"Alex", age:30})
- use another const arrow function inside of the functional component.
- NB the hook replaces the old state whereas class based this.setState merges the state automatically.
- Best practice with hooks is to use state slices, meaning multiple useState calls, instead of manually merging state.

## Method calls
- pass down methods as props
- use bind plus an argument or use anonymous arrow functions to pass arguments

## Conditional
- Ternary possible, but preferred is inside render method with if statement

## List
- use map inside render method

## Dynamically set styles and classes
- Inside render method with if statements, change properties of styles object
- Create classes array which can be joined with a space in className

## Styling
- Radium, npm install --save radium, use <StyleRoot> wrapper for media queries and use Radium as HOC
- styled-components, npm install --save styled-components
- CSS modules, use nmp run eject to edit webpack config. Then add modules: true, localIdentName: '[name]__[local]__[hash:base64:5]' to the css-loader options.
- in react scripts version 2, you have to name the css file: Person.module.css and then import. No need to eject anything and modify webpack.

## Errors
- Wrap components with error boundaries

## Lifecycle
- In functional components use the useEffect hook for lifecycle hooks
- useEffect with empty array as second arguments simulates componentDidMount
- use props in the array if you want componentDidUpdate to run on certain props
- useEffect can also take a return statement that returns an anoymous function, this simulates componentDidUnmount

## Optimization
- use shouldComponentUpdate in class based component
- use React.memo as a HOC around a function component
- use a PureComponent if all of the props need to be checked for changes
