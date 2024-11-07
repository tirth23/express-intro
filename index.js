const express = require("express");

// create an express app
const app = express();

/* 
when we sent post request from client with data in json format, in req.body it is received as undefined
To resolve that we need to use app.use(express.json()) in start of file. express.json() function is a built-in middleware in
Express. Its main job is to parse incoming JSON data from the client
and make it available in req.body
*/
app.use(express.json());

/* 
express.static is a middleware function that serves static files such as HTML, CSS, JavaScript, images, and more.
It is often used to serve client-side assets, making it easy to host static files like HTML, CSS, and JavaScript for your web application.
The root parameter specifies the root directory from which to serve static files.
The optional options object allows you to configure various settings, such as caching and file handling. 

To access files inside static("folder") in browser by navigating to http://localhost:3000/index.html, http://localhost:3000/sample.jpg
*/
app.use(express.static("public"));

/* 
express.urlencoded is a middleware function that parses incoming URL-encoded data from forms 
and makes it available in the req.body property 
*/
app.use(express.urlencoded({ extended: true }));

/* 
next() inside this middleware, you're telling Express to proceed to the next handler in the line for the current request.
This "next handler" could be another middleware or a route handler
To ensure your logger middleware runs for every request, you should place app.use(loggerMiddleware) before any route handlers 
*/
const loggerMiddleWare = (req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next(); // call the next middleware
};

/* this will be called for every incoming request */
// app.use(loggerMiddleWare);

/* this will give error for every route since it is written first, order of middleware and handlers matters */
app.use((req, res) => {
	res.status(404).send("Page not found");
});

// define a route
// app.get("/", (req, res) => {
// 	res.send("Hello, Express!!!");
// });

app.get("/about", (req, res) => {
	res.send("this is about page");
});


app.post("/data", (req, res) => {
	console.log("request recieved", req.body);
	res.send("this is post request");
});

const users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Doe" },
];

/* 
endpoint to add new user
send a POST request to http://localhost:3000/users with below JSON body
{
  "name": "New User"
}
*/
app.post("/users", (req, res) => {
	const newUser = req.body;
	const userID = users.length + 1;
	newUser.id = userID;
	users.push(newUser);
	res.status(201).json({ message: "User created", user: newUser });
});
/* 
route parameters and query parameters are mechanisms for passing data to a web server or an application, typically through a URL
They allow you to customize the behavior of your routes and pass data between clients and servers effectively.

Query parameters are part of the URL's query string and are used to provide additional information or data to the server. 
They are typically specified after the ? character in the URL and are in the form of key-value pairs
Send post request with query paramters: www.api.com/users?name=John
GET /search?q=keyword&page=2&sort=desc
In Params tab in Postman, parameters are captured 
*/


/* 
Route parameters are part of the URL's path and are used to define variable parts of a route. 
They are typically denoted by placeholders in the route pattern, surrounded by colons (:).
When a client makes a request with a URL that matches the route pattern, the values specified in the URL are extracted 
and made available to the server or application.

RESTful API for retrieving a specific user's profile: GET /users/:userId
In this URL, :userId is a route parameter. 
When a request is made to /users/123, the server can extract the value 123 from the URL and use it to retrieve the user with that ID.

send a DELETE request to http://localhost:3000/users/1 to delete the user with ID 1
*/
app.delete("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	// find the user with id
	const userIndex = users.findIndex((user) => user.id === userId);
	if (userIndex === -1) {
		return res.status(404).json({ message: "User not found" });
	}
	users.splice(userIndex, 1);
	res.json({ message: "User deleted" });
});

/* apply loggerMiddleware only to a specific route */
app.get("/special", loggerMiddleWare, (req, res) => {
	res.send("this is special route");
});

app.get("/search", (req, res) => {
	const querParams = req.query;
	console.log(querParams);
	res.send(`YOur parameters are ${JSON.stringify(querParams)}`);
});

/* if no route matches or user enters a random path then a page not found message from the server should be sent */
app.use((req, res) => {
	res.status(404).send("Page not found");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
