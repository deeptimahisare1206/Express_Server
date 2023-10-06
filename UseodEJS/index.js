import  express from "express";

const app= express();
app.set('view engine', 'ejs');

// app.get('/',(req,res)=>{
// res.send('index');
// })

app.get('/',(req,res)=>{
    // let myname= req.params.name;
    // res.render('index',{name: myname});

    let mydata ={
        name:"Deep",
        age:20,
        course:"B.Tech."
    }
    res.render('index',mydata)
})

// app.get('/',(req,res)=>{
//     res.send("home");
// })
app.listen(5000,()=>{
    console.log('server running....')
})