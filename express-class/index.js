const express = require("express");
const a = express();

const users = [
    {
        name: "John",
        kidneys:[{
            healthy:false
        }]
    }];

a.use(express.json());

a.get("/",function(req,res)
{
    const johnKaKidney = users[0].kidneys;
    const numberOfKidneys = johnKaKidney.length
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<johnKaKidney.length;i++)
    {
        if(johnKaKidney.healthy)
        {
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
})

a.post("/",function(req,res)
{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push(
        {healthy:isHealthy}
    )
    res.json({
        msg: "Done!"
    })
}
)

a.put("/",function(req,res){
    for(let i = 0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

a.delete("/",function(req,res)
{
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        newKidneys.push({
            healthy:true
        })
    }
    users.kidneys = newKidneys;
    res.json({msg: "Done!"})
})

a.listen(3001);