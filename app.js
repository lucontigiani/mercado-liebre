const express = require('express');
const app = express();

const path = require('path');

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath))

app.listen(3030, () => {
    console.log("Servidor corriendo en puerto 3030")
})


app.get("/", (req, res) => {
 let = htmlPath = path.resolve (__dirname, './views/index.html');
res.sendFile(htmlPath);
   })

app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});