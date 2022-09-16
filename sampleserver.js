var http=require('http')
var fs=require('fs')
var url=require('url')



// you can write code like this:

//server callback function with arguments response and request
//http.createServer(server).listen(7000)

//function server(req,res){
    //res.write('sample sever')
    //res.end()


    http.createServer(function(req,res){

        var q=url.parse(req.url,true)
        //console.log(q.pathname)

        if(q.pathname==='/'){   //in browser html page will run localhost:7000   , requesting the url page 

        fs.readFile('samplehtml.html',function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)//requesting the server 
            res.end()//ending the response
    })
}


else if(q.pathname==='/signup'){    // in browser run localhost:7000/signup  so the html signup page is displayed  
    fs.readFile('signup.html',(error,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)//requesting the server 
        res.end()//ending the response  //in browser type localhost:7000/login   so login page will be displayed
     } )


    }else if(q.pathname==='/signupaction'){

    console.log(q.query.lname)


        res.write("action")//requesting the server 
            res.end()//ending the response
    
}else{
    res.writeHead(404,{'Content-Type':'text/html'})   //in browser type localhost:7000/hi (or any other name) so that error will displayed  
    res.write('error')
    res.end()
}
    
}).listen(7000,()=>console.log("server started"))   //arrow function '=>' , here to display in terminal that server has started


