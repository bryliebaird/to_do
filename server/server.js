// ----- Express Framework ----- 

const express = require('express');
const app = express();

// ----- Project Dependencies ----- 

const bodyParser = require('body-parser');
const morgan = require('morgan');



// ----- Fake Data -------- 

let toDoArray = [
    {id: 1, description: 'Call Mom', isComplete: false},
    {id: 2, description: 'Get Food', isComplete: false},
    {id: 3, description: 'Walk Dog', isComplete: false},
];



// ----- Route Handlers -----  

// Root Route 
app.get('/', (req, res) => {

    res.send("Hello, World!")
    
});



// Return ALL resources
app.get('/todos', (req, res) => {

    // Find ALL resources in the data collection - if resource does not exist, return 404
    res.send(toDoArray);

    // Return collection to client

});


// Return ONE resource
app.get('/todos/:id', (req, res) => {

    // Find resource - if resource does not exist, return 404
    let task = paseInt(req.params.id);
    res.send(task);
  
    // Return to client

});


// Create resource
app.post('/todos', (req, res) => {

    // Validate input - if input is invalid, return 400 

    // Create resource
    let newTask = {
        id: 4,
        description: "Buy More Stuff",
        isComplete: false
    }

    // Push to data collection
    toDoArray.push(newTask);
    
    // Return to client
    res.send(toDoArray);

});


// Update, or replace, ONE resource 
app.put('/todos/:id', (req, res) => {

    // Find resource - if resource does not exist, return 404

    // Validate input - if input is not valid, return 400
    
    // Update resource

    // Return to client

});


// Delete ONE resource 
app.delete('/todos/:id', (req, res) => {

    // Find resource - if resource does not exist, return 404
    let completedTask = parseInt(req.params.id);

    // Delete resource 
    res.send(toDoArray.splice(completedTask, 1));
   
});


/* ----- Listener ----- */ 

// Allow port to be dynamically assigned
const port = process.env.PORT || 3000;


// Listener
app.listen(port, () => console.log(`Listening on Port ${port}.`));