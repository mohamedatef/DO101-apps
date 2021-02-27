var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World 4!\n');
});


app.get('/EFG', function (req, res) {
  res.send('Hello EFG World 2!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080! ready to go');
});

