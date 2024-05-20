const zod = require("zod");
const express = require("express");
const app = express()
const port = 3000;


const schema =  zod.string().email();

app.use(express.json())

app.post("/signup",function(req,res){

    const email = req.body.email
  
    const response = schema.safeParse(email)
    res.send({response})
}
)

// function validateInput(obj){
//     const response = schema.safeParse(obj)
//     console.log(response)
// }


// validateInput({
//     email:"anirudhparab124@gmail.com",
//     password:"1234556678"
// })
app.listen(port,() => {
    console.log(`app is listening on port ${port}`)
})