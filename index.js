const express = require('express');
const app = express();
const path = require('path');



//app.use(express.static('public'));




app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/about.html',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','about.html'));
});

app.get('/contact-me.html',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','contact-me.html'));
});

app.use(function(req, res) {
  res.status(404);
  res.sendFile(path.join(__dirname,'public','404.html'));
});


 /*app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname,'public','404.html'));
});*/

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

