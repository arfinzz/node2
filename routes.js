const fs=require('fs');

    
const routefun=(req,res)=>{


    const url=req.url;
    const method=req.method;
    

    if(url==="/")
    {
        fs.readFile('message.txt','utf-8',(err,data)=>{
            if(err)
            {
                
                console.log(err);
                res.setHeader('content-type','text/html');
                res.write('<html><head><title>Home</title></head><body><form action="/message" method="POST"><input type="text" name="msg"></input><button type="submit">Submit</button></form></body></html>');
                return res.end();
            }
            else
            {
                res.setHeader('content-type','text/html');
                res.write(`<html><head><title>Home</title></head><body><div>${data}</div><form action="/message" method="POST"><input type="text" name="msg"></input><button type="submit">Submit</button></form></body></html>`);
                return res.end();
            }

        })

       
    }
    else if(url==="/message" && method==="POST")
    {
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const txtdata=Buffer.concat(body).toString();
            const msg=txtdata.split('=')[1];
            fs.writeFile('message.txt',msg,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
            });
            

        })

        
        
    }

}


module.exports=routefun;
    
    