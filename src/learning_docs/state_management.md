***Updating the screen***

When you want your component to remeber some information and display it, you can add state to your component. 

```
function myButton() {
    const [count, setCount] = useState(0)
}
```

UseState is a hook which lets you store the current state (count), and update it (setCount). The convention is always the same, 
[something, setSomething]

Here, everytime you click button, the event handler OnClick calls handleClick where the state is updated on click. Note that if you 
have two buttons/components, their state management will be handled seperately. 

```
import {useState} from "react";

function MyButton() {
  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count +1); 
  }

  return (
    <button onClick={handleClick}>
      Button, {count}
    </button>
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

Now, what if you wanted them to be updated at the same time instead of seperately? 

Notice that, useState is inside MyButton, so each time you create a newButton, it has its own seperate count. If you want all the buttons to have the same count, move useState up to the parent - MyApp and pass the count and setCount down as props. 

```
import {useState} from "react";

function MyApp() {
  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count +1); 
  }

  return (
    <div>
        <button count={count} onClick={handleClick}><button>
        <button count={count} onClick={handleClick}><button>
    <div>

  )

}
```
The information we pass down from the parent to the button is called props. MyApp component has the count state and handleClick event handler and we pass both of them as props for each of the buttons. 
 