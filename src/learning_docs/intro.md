***ReactJS Learning documentation***

ReactJS is an open source Javascript library. It is used for building user interfaces UI. It is unique from other web frameworks because it allows reusable components and contents are dynamically updated. It also uses a virtual DOM. 

UI workflow summarized: 

When a user opens a website -> the request hits the UI server (this contains all the static contents) -> for dynamic contents this server sends request to the API server (only responsible for business logic, no UI elements) -> this gets/updates information inside the database server. 

The database will respond some data back to the API -> API does some logic like filtering -> send the data back to UI server which sends the data back to the user 

**1. What is a DOM?**
Document Object Model represents the web page as a tree like structure which allows Javascript t dyanamicaly acess and manipulate the content of a web page, where the root element has child elements. 

Usually, in other langauges, with a small change like changing the title of an element, the whole layout is rerendered. This works directly with the Real DOM and refreshes the entire page. This increases the load time of the application, so def not good. 

React, on the other hand, uses a *Virtual Dom* tree. This is a copy of the real dom tree that users can see. When you make a change, only that specific tag is changed in virtual and real dom. React libraries in the backend keep comparing the changes between the virtual and Real Dom tree and update only that part in the Real Dom tree. 

**2. What are Components?**
They are just reusable building blocks for creating user interfaces

**3. How to set up a react project?**
To create a new react folder -> npx create-react-app <name>
To start the app -> npm start 
Find this folder created in VS code to start coding 

***Files and Folders***

**4. What is npm? What's inside the node_modules folder**
npm creates node_modules which has all the libraries and dependencies needed for UI development. 
Let's say you didn't use npm, then you would have to yourself download all the necessary dependencies and do more work. 

**5. What's inside the public folder?**
It has all the static contents that are shown directly to the user's browser like pictures, fonts and index.html file. 

index.html file -> the entry point for react application. All the components are placed dynamically inside this single page application. 


**6. What about src folder?**
Source code developed by you should be here. 

App.css -> 
App.js -> It is the top/main root level component in a React application, and its responsible for rendering all of the other components. 
index.css -> 
index.js -> It is an integration file, where the code in App.js is converted to the actual browser DOM. This is possible because of this code: const root = ReactDOM.createRoot(document.getElementById('root')); This creates root element again. In short, it is a javascript file which renders all the components and replaces the root element of index.html file with the newly rendered root element. 

This renders all the root components: 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

**7. How does React App load and display the components in browser?**
When user clicks on something -> it sends a request to the index.html file ->  then index.js file is loaded on the browser -> index.js loads the App.js file -> sends response back to index.html. 


***Code***

**1. What is function and return inside App.js?**
Function is a javascript function that returns a react element. Function is a component body placeholder and return makes sure to return a react element to the index.html

function App() {
    return (
        <div classname='App'>
        Learning React
        <div>
    ); 
}

**1. Can we have a function without return inside App.js?**
Yes, sometimes we might not want to return a react element, maybe we need to log something or fire an event. 

function App() {
    console.log("clicked!")
}
export default app; 

**2. What is the role of export default inside App.js?**
Export default just makes this app available for import using "import" statements in other files. Almost all the time in react, 
we say import <component name> from another file. 









