
var fs = require('fs');
var getData = fs.readFileSync('colourfile.json');
var yourColour = JSON.parse(getData);
console.log('yourColour');
console.log("server is running");
var express = require('express');
var app = express();
var server = app.listen(8000, listening);
function listening(){
    console.log("listening")
}

app.get('/add/:color/:option', chooseColour);
function chooseColour(request, response){
  var getData = request.params;
    var colours = getData.colours;
    var option = Number(getData.option);
    yourColour[colours] = option;
    var getData = JSON.stringify(yourColour);
    fs.writeFile('colourfile.json', getData, finished);
        function finished(err) {
            console.log('got the colours')
        }
    var reply = {
        msg: "Thank you for your colour."
    }
  response.send(reply)
}
app.get('/all', sendAll);
function sendAll(request, response){
    response.send(yourColour);
}

app.get('/search/:colours/', find);
function find(request, response){
        var colours = request.params.colours;
        var reply;
        if (yourColour[colours]) {
        reply = {
            status: 'found',
            colours: colours,
            score: yourColour[colours]
        }
    } else {
        reply = {
            status: 'not found',
            colours: colours
        }
    }
response.send(reply);
}
