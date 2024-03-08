const express = require('express') ;
const dotenv = require('dotenv') 


const app = express()

app.get('/',(req,res)=>{
     res.send("Hey Potter") 
})


app.get('/api/chat/:id',(req,res)=>{

})

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
    console.log(`Server started on port`);
});


