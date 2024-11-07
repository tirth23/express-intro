## API
### Application programming interface
### An API (Application Programming Interface) is a set of rules and definitions that allows software applications to communicate with each other. In the context of web development, APIs are typically exposed as endpoints on a server that clients (such as web browsers or mobile apps) can interact with to perform various operations.
### In backend development, an API consists of various endpoints or routes that define specific functionalities or services that your server provides.
### Each endpoint corresponds to a specific URL path and usually performs a particular action when accessed

## Express
### Express.js is a minimalist web framework for Node.js. While you can certainly build web servers and applications 
using just the built-in HTTP module in Node.js, Express.js provides a higher-level way 
to to do certain tasks like manage routes, requests, and views.
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

## Testin Postman
### Open Postman and click the "New" button to create a new request. Choose the HTTP method (e.g., GET, POST) for your request.
### Enter the URL of the API endpoint you want to test in the request URL field.
### You can set request headers by clicking on the "Headers" tab. Headers are used to pass additional information to theserver, such as authentication tokens or content type.