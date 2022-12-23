const { Configuration, OpenAIApi } = require("openai");
const { response } = require("express");


const configuration = new Configuration({
  
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const generateasnwer = async ( req ,res) => {
console.log(req.body)
    const {prompt} = req.body;

  

   
     const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:prompt ,
        max_tokens: 50,
        temperature: 0,
     
    
     });



console.log(response.data.choices[0].text)

if(response.data)
res.json({
  data: response.data.choices[0].text
     });


   
    
   }


module.exports = { generateasnwer };