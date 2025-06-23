***Non react applications ***
When a user types in a url on a browser it sends a request to the server. The sever responds back with an html file. When a user clicks on another feature again, the process repeats in a loop. 

***React applications***
Similar process, when user types in a url on a browser, it also sends a request to the server. The server will send back html file and a js bundle. From this point on, react router can take full control. When user clicks on something on the page, react router will step in and intercept that request to stop it from going to the server. Update the DOM and inject the necessary components. 

When you visit a route, that only that component is dynamically rendered on the screen for the users. Less requests to server feels faster
