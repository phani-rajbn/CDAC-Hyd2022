//Http is a module of nodejs used to create web servers. It is light weight and easy to build. Http Module allows U to create on the fly web sites and handle HTTP  requests. GET, PUT, POST and Delete are the prominent methods of HTTP  that Http Module can handle. However for complex website development and web handling, it is recommended to use EXPRESS which is a Nodjs module with more advanced features. 

const http = require('http')
const fruits = ["Apples", "Mangoes", "Oranges", "Bananas"];
const server = http.createServer((req, res)=>{
    if(req.url != 'favicon.ico'){
        res.write("<h1>Welcome to Nodejs Server Environment</h1");
        res.write("<hr/>");
        res.write("<h2>List of fruits available with Us!!!!<h2>")
        for (const fruit of fruits) {
            res.write(`<li>${fruit}</li>`)
        }
        console.log(req.url);
        res.end();//send the data to the browser.
    }
});
server.listen(1234);//listens to the port no 1234, users should request with this port no.http://localhost:1234/
