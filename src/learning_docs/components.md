**Components**

When you make a function with a capital letter, it becomes a component you can use/nest within other components. 

```
function MyButton() {
  return (
    <button>I'm a button</button>
  ); 
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  ); 
}

export default MyApp; 
```

**Styles**

To add a style to a JSX, use a CSS class with classname. <img className="Me">
The css class "Me" is then written in a seperate file 

**Curly braces**

You can use curly braces to add some variable from code and display. {user.name}

To add an image under a username, 

```
const user = {
    name: "Rodoshi", 
    imageurl: <url>, 
    imagesize: 90, 
}; 

export default function Profile() {
    return (
        <>
        <h1>{user.name}<h1>
        <img
        className="this is where you style in css"
        src={user.imageurl}
        alt={user.name}
        style={{
            width:user.imageSize, 
            height:user.imageSize
        }}
        >
    )
}


```

style is React is an inline prop which accept an object, where you can define certain parameters such as 
color, fontSize, backgroundColor, marginTop, display etc. Notice they are in camelCase. 

**Conditional rendering**

We can use if/else or ternary operators 

```
let content; 
if (isLoggedIn) {
    content = a; 
} else {
    content = b; 
}
return (
    <div>
     {content}
    <div>
)
```
OR, 

```
{
(isLoggedIn) ? (
     a
) : (
    b 
)
} 
``` 

**Rendering lists**

Products here is the list, product is the iterator. 
<li> is list item in HTML used to display items in a list. When you're iterating through the list with .map, and creating <li> elements that displays the title and id. Then we put those in an <ul> element which is essentially bullets. 



```
const products = [
  {title: 'Cabbage', id: 1}, 
  {title: 'Garlilc', id: 2}, 
]

const listItems = products.map(product => 
  <li key={product.id}>
    {product.title}
  </li>

  return (
    <ul>{listItems}</ul>
  )
); 
```

**Responding to events**

handleClick here is simply an event handling function. For the button we're making here, we can 
pass it down to onClick which is an event handler. 

```
function MyButton() {
  function handleClick() {
    alert("It has been clicked")
  }

  return (
    <button onClick={handleClick}>
    Click me
    <button>
  )
}
```

**Hooks**
Quick trick -> functions starting with "use" are called Hooks. useState is a built in hook but you can create your own. 



