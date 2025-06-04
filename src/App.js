
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


