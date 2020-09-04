const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000 ; //take port number from heroku environment OR take default 3000 port

app.use(express.static(publicPath));

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
//handle 404 error if path not found error accure it will redirect to index.html page

app.listen(port, () => {
    console.log('Server is up!');
});
//Express use 3000 port 