
//global objects __dirname , __filename , module, console ,require

//console.log(__dirname);
//console.log(__filename);

// const nm = require('./exp');
// console.log(nm.ddd); //module name btana ha


//const nm = require('./exp');
//console.log(nm.ddd.add()); //calling function into 


// const mn = require('./exp');
// console.log(mn.ddd.name); //accessing variable object 




//LET and CONST   ECMA6 ES6
//  var a;
//  var a;  //it don't gives error

// let a;
// let a; //but in let it gives error like identifier a has been declared

//const can't be declared or reassign again and again

// const a ; //wrong way
// a=10;//wrong way
// const a = 10;  //right way


//////creating a server by http built_in modul

// const http = require('http');
// const server = http.createServer((request, response) => {
//     response.setHeader('content-type', 'text/html');
//     if (request.url == '/'){

    
//         response.statusCode = 200;
//         response.write('<h1>Hello from Node JS Server</h1>');
//     }
//     //response.write(request.url);
//     else if(request.url == '/hello'){
//         response.statusCode = 404;
//         response.write('<h2>Hello from Node JS <h2>');
//     }
//     response.end();
// });


// server.listen(3000, () => console.log("Server Running on http://localhost:3000"));

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.static(__dirname + '/public'))
app.get('/', (req ,res) => {
    //res.send('Hello  World');
    res.sendFile(__dirname +'/index.html');

});

app.get('/user',(req,res) => {
res.send('Hello to All Users');
});
app.listen(port, () => console.log('Server running at http://localhost:4000'));













