
function example(a, b, callback) {
    setTimeout(function () {
        callback(a + b)
    }, 2000)
}

console.log('Before asynchronous call')
example(12, 23, (finalresult) => {
    console.log("Result:- ", finalresult)
})
console.log('After asynchronous call');

// Build a serverless application using Node.js and AWS Lambda. The application should be able to process requests from a RESTful API, perform data processing or manipulation, and return a response to the client. 

2.Create a real-time multiplayer game using Node.js and a library like Phaser or 
Socket.io
Users should be able to join game rooms, play against each other, and see the game state in real-time. 

// You have a Node.js application that connects to a database and retrieves data, write a program that implements a RESTful API endpoint that returns a filtered and sorted subset of data from the database based on specific criteria.
// 
// Your API should accept the following parameters as query parameters:
// 
// filter: a JSON object that specifies the filter criteria for the data. For example, { "name": "John", "age": { "$gt": 30 } } would return all records where the name is "John" and the age is greater than 30.
// sort: a JSON object that specifies the sorting order for the data. For example, { "name": 1, "age": -1 } would sort the records by name in ascending order and age in descending order.
// limit: an integer that specifies the maximum number of records to return.
// The endpoint should return a JSON object with the following properties:
// 
// success: a boolean that indicates whether the request was successful.
// data: an array of JSON objects representing the filtered and sorted data.
// count: an integer representing the total number of records that match the filter criteria.
// Your program should handle errors gracefully and return appropriate HTTP status codes for different scenarios (e.g. 400 for bad request, 404 for not found, 500 for server error).
// 
// You can assume that the database is already set up and that the necessary database driver and middleware modules are installed. 

mongodb+srv://abhiproject:EgpKWMIXTI5YWdFr@cluster0.helxhqp.mongodb.net/Project1blogs