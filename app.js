const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const employees = [
    {
    employeeID: "EMP01",
    name: "Gloria Bempa",
    position: "General Manager",
    age: "50"
    },
    {


    employeeID: "EMP02",
    name: "Lowis Quaye",
    position: "IT Consultant",
    age: "39",
    
    },
    {


    employeeID: "EMP03",
    name: "Helen Baker",
    position: "Human Resoucres",
    age: "27"
    }
    ]





app.get('/', function (req, res) {
  res.render('home', {
      employees
  } );
})



const port= 8000
app.listen(port, ()=>{
    console.log(`server has started on port ${port}`);
})