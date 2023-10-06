import express from 'express'
const app= express ();
const Port= 1206

const middleware= (req,res,next)=>{
    console.log("Middleware Funtion")
    next();
}
app.get('/',(req,res)=>{
    res.write("<h1>Home page</h1>");
    res.write("<h3>Welcome</h3>");
    res.write("<h3>Welcome</h3>");
    res.write("<h3>Welcome</h3>");
    res.write("<h3>Welcome</h3>");
    res.write("<p>to my world</p>");
    res.send();

})
app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',middleware,(req,res)=>{
    res.send("About Page");
})

// app.get('/contact',(req,res)=>{
//     res.send("Contact Page");
// })

// app.get('/',(req,res)=>{
//     console.log(req.query);
//     console.log(req.query.name);
//         res.send("Home Page <h1>Welcome</h1>" + req.query.name);
//     })
    app.listen(Port,()=>{
        console.log(`Server is running on port no.  ${Port}`);
    })