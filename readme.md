## API
### Application programming interface
### An API (Application Programming Interface) is a set of rules and definitions that allows software applications to communicate with each other. In the context of web development, APIs are typically exposed as endpoints on a server that clients (such as web browsers or mobile apps) can interact with to perform various operations.
### In backend development, an API consists of various endpoints or routes that define specific functionalities or services that your server provides.
### Each endpoint corresponds to a specific URL path and usually performs a particular action when accessed

## Express
### Express.js is a minimalist web framework for Node.js. While you can certainly build web servers and applications using just the built-in HTTP module in Node.js, Express.js provides a higher-level way to to do certain tasks like manage routes, requests, and views.
### This is same like how we can do all our front end development using vanilla js but with React, angular and other lib and framework, we end up writing less code and getting more functionality.
1. Simpler and cleaner syntax
2. Code readability
3. Routing: Express provides a straightforward way to define routes and handle different HTTP methods (GET, POST, PUT, DELETE, etc.). In vanilla Node.js, you'd typically have to handle URLs and methods manually, which can be cumbersome.
4. Middleware: One of the core features of Express is its convenience in use of middleware, which are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
5. Request handling / routing much more scalable and manageable
6. Lot of heavy lifting of logic and features are done by express

## Express Setup
### Initialise a new node project -y creates node project with default 
### Create a file index.js
```
npm init -y
npm i express --save
```

## Test in Postman
### Open Postman and click the "New" button to create a new request. Choose the HTTP method (e.g., GET, POST) for your request.
### Enter the URL of the API endpoint you want to test in the request URL field.
### You can set request headers by clicking on the "Headers" tab. Headers are used to pass additional information to theserver, such as authentication tokens or content type.
### If your request requires a request body (e.g., for POST or PUT requests), you can define it in the "Body" tab. You can send data in various formats like JSON, form-data, x-www-form-urlencoded, etc.

## Middleware
### Middleware functions run between receiving the request and sending the response. Middleware functions in Express.js are functions that have access to the request (req) and response (res) objects and can perform actions or transformations on them They can perform tasks like parsing data, handling authentication, logging, and more. app.use() is a method in Express that is used to apply middleware functions to our application.
### When we use app.use(), you are essentially telling Express to use a particular middleware function. This function will be called for every incoming request, unless you specify a path to limit its scope
### if it is written at start of file. all req-res method will use this. if applied to specific routes using app.use() or app.METHOD() (e.g., app.get(), app.post()) particular method app.METHOD() (e.g., app.get(), app.post()), then it can be passed as arg in that method.
###  In the world of web development, especially with frameworks like Express.js in Node, "middleware" are just like checkpoints. When a request comes into your application, it doesn't just jump straight to the final destination. It often goes through several "checkpoints" or "middlewares" that can check the request, transform it, log it, validate it, and more.
### So, in simple terms, middleware functions are the individual "checkpoints" in your application that requests go through before reaching their final destination

## PUT
### This method is used when you want to update a complete resource. When you make a PUT request, you provide a complete updated object. The server then replaces the existing resource withthe provided object. 
### If certain attributes are missing in the request, those are typically set to their default values or removed. Essentially, a PUT request entirely replaces the existing resource with a new version.
### Use PUT when you have the complete updated state of the resource. PUT is idempotent, meaning that making the same request multiple times will result in the same state of the resource on the server.

## PATCH
### PATCH is used for partial updates. With a PATCH request, you only need to provide the specific changes to the resource, not the complete resource. The server then applies these changes to the existing resource.
### Use PATCH for updating parts of the resource or for situations where sending the complete resource is not feasible or necessary. PATCH can be idempotent, but it's not a requirement. It depends on how the server processes the PATCH request.


