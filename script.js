const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("HI, I am Arfin")
})

server.listen(3000);