var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title:'article-one dhayananth',
    heading:'article one',
    date:'sep 5',
    content:`
     <p>
                ihshefhjewufebfdsihfhoewlknfflkehgegreg
                regdxfhgjhkgfjgdhfsgdfszdgfngmh,bjkghfutdyrstdfzxvcbvnbmvhkyfutytsdfzxcbvcnbvmhjdyfg
                gzhdjfkghkhfjgdhfdsgdhfgjhkfutdygdhtuy
            </p>
            <p>
                hiewoufhweujbfhpuiegfsjnjhfoeulwknetewrt
                er
                ryetudiytouiydruterysewetsyhfdxdjgkfyirertearsfgzxfgkyir7erygxbfhduss
                ryeyutriytruteyrydjgfkyiu
            </p>
            <p>
                fnoiwejfnmkewpjffi'wolkev'iwefniperjgpis'e;msv'kiehoghodv
                rwteyturytikydjtsrsaFSZGdxfncgmvh,vjlhuotiyrtertesdgzbcxncmgch
                awrteyresutriytyiruteyrwtewrwagdshfdjgkfhgluourtyrsgd
            </p>`
};

function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate= `
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <a href="/">home</a>
        <hr/>
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
     res.send(createTemplate(articleone));
});
app.get('/article-two',function(req,res){
    res.send('article two is requested');
});
app.get('/article-three',function(req,res){
    res.send('article three is requested');
});
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
