var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article1={
    title:'Article1',
    date:'nov2,2017',
    content:`article1 my frst web app. article 1 my first web app.

article1 my frst web app. article 1 my first web app`
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
}
var htmlTemplate={
    <html>
    <head>
        <title>
            article1:Nandhiny
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            
        
        <div>
            feb 2 2017
        </div>
        <div>
            <p>
                article1 my frst web app.
                article 1 my first web app.
            </p>
            <p>
                article1 my frst web app.
                article 1 my first web app.
            </p>
        </div>
        </div>
    </body>
</html>

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
});
app.get('/article-two',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article2.html'));});
app.get('/article-three',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article3.html'));});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
