const express = require('express')
const app = express();
const route = require('./routes')

app.use(express.urlencoded({extended:true}));
app.use(route)

app.listen(3000, ()=> {
    console.log('executando na porta 3000')
});