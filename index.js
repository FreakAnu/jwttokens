const express = require ("express")
const app = express();
const zod = require ("zod")
const port  = 3001;

const myScheme = zod.array(zod.number())

app.use(express.json())

app.post("/health-checkup", function(req,res){

   /* const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.query.kidneyid;

    if ( username != "Anirudh" || password != "pass" ){
        res.status(403).json ({
            "msg": "wrong credentials"
        })
        return;
    }   

    if ( kidneyid != 1 && kidneyid != 2 ){
        res.status(403).json ({
            "msg": "wrong input"
        })
        return;
    }

    res.json({
        "msg":"Your kidney is safe"
    })*/

    const kidneys = req.body.kidneys;
    const response = myScheme.safeParse(kidneys)

    res.send({response}) 

    // const kidneyLenght = kidneys.length;

    // res.send("Your kidney lenght is " + kidneyLenght);
});
// app.use(function(err,req,res,next){
//     res.status(500).send("There was an internal error")
// })


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})