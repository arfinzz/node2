const http=require('http');

const server=http.createServer((req,res)=>{

    const url=req.url;

    if(url==="/home")
    {
        res.setHeader('content-type','text/html');
        res.write('<html><head><title>Home</title></head><body><h1>Welcome home</h1></body></html>');
        return res.end();
    }
    else if(url==="/about")
    {
        res.setHeader('content-type','text/html');
        res.write('<html><head><title>About Us</title></head><body><h1>Welcome to About Us Page</h1></body></html>');
        return res.end();
    }
    else if(url==="/node")
    {
        res.setHeader('content-type','text/html');
        res.write('<html><head><title>NodeJS</title></head><body><h1>Welcome to NodeJS Page</h1></body></html>');
        return res.end();
    }
    

    
})

server.listen(3000);