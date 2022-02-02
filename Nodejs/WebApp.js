const http = require('http') //for creating web server
const fs = require('fs')//to read/write html files. 
const httpParse = require('url').parse;

const root = __dirname;//__dirname is the Const given by Nodejs for getting the path of the current directory.
//console.log(root);

function display(res, url) {
    const file = root + url +".html";//currDir + url + .html:/HomePage ==>HomePage.html 
    fs.createReadStream(file).pipe(res);
}

function errorPage(res){
    res.writeHead(200, {'Content-type' : 'text/html' });
    res.write("<h1> NodejS Error page</h1>")
    res.write("<hr/>")
    res.write("<p>OOPS! The Page U R requested is  not with us folks!!!</p>");
    res.end();
}

http.createServer((req, res)=>{
    //handle the GET method
    if(req.method == "GET"){
        const query = httpParse(req.url).query;//Check for the query string...
        if(query != null){
            let obj = httpParse(req.url, true).query;
            const content = `Thank you for registering with Us!UR Name ${obj.txtName} with Email address  is mentioned as ${obj.txtEmail}`
            res.write(content);
            res.end();
            return;
        }
    }else if(req.method == "POST"){
        req.on('data', function(inputs){
            res.write(inputs);
            res.end();
        })
    }
    switch(req.url){
        case '/favicon.ico':
            res.end();
            break;
        case "/HomePage":
            display(res, req.url);
            break;
        case "/Registration":
            display(res, req.url);
            break;
        default:
            errorPage(res);
            break;
    }
}).listen(1234);


