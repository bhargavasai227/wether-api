const axios = require('axios');
const express =require("express");
const app = express();
let cors = require("cors");
app.use(cors());

async function wether(loc){
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {q: loc,days:5},
      headers: {
        'X-RapidAPI-Key': '83ca05ea31mshbd180f199cfa9aep1cb28cjsnf5f7e54702b3',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
  
    try {
        const response = await axios.request(options);
        return(response.data)
    } catch (error) {
        console.log(error);
    }}

    
app.get("/",async function(req,res){

res.json( await wether(req.query.loc));

})

app.listen(3001,()=>{console.log("server started");})