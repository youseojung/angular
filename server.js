const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ang-boot-app'));

app.use(function(req,res,next){
	res.header('X-Frame-Options','SAMEORIGIN');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.get('/test', function(req,res,next){
   res.write('test!');
   res.end();
});


app.get('/api/companies',function(req,res,next){
    
    let list = [];
    list = companyListView();
    let result = {};
    //result = list;
    result['company'] = list;

    res.json(result);

});

app.get('/api/login',function(req,res,next){
    let id = req.query.id;
    let pwd = req.query.pwd;

    let result = {isLogin:false};

    if(id=="test"){
        if(pwd=="test"){
            result = {isLogin:true};
        }
      }
      res.json(result);
});
/*
//http://localhost:3000/api/users?name=test&num=1
app.get('/api/users', function(req,res,next){
    console.log(req.query);
    next();
})
*/

app.get('/api/list',function (req,res,next){
    let type = req.query.type;
    let list = [];
    if(type==='user'){
        list = getUsers();
    }else if(type==='animal'){
        list = getAnimals();
    }else if(type==='computer'){
        list = getComputers();
    }

    let result = {};
    result[type] = list;

    res.json(result);

});

function getUsers(){
    return [
        {name: 'sj', age: 20 },
        {name: 'sy', age: 23 }
        
    ];
}

function companyListView(){
    /**name:string;
    year:number;
    address:string; */
    return [
        {name: 'dog', year: 20 , address:'서울'},
        {name: 'cat', year: 23, address:'부산' }
    ];
}

function getAnimals(){
    return [
        {name: 'dog', age: 20 },
        {name: 'cat', age: 23 }
    ];
}

function getComputers(){
    return [
        {name: 'mac', age: 20 },
        {name: 'samsung', age: 23 }
       
    ];
}

app.get('/api/users', function(req,res,next){
    let userList = [
        {name: 'u', age: 20 },
        {name: 'd', age: 23 },
        {name: 'b', age: 24 },
        {name: 'c', age: 20 },
        {name: 'v', age: 28 },
        {name: 'm', age: 29 }
    ];

    res.json(userList);
})

app.get('/*', function(req,res,next){
    console.log(req.method);
    res.sendFile(path.join(__dirname + '/dist/ang-boot-app/index.html'));
    next();
});

var port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",function(){
    console.log("Listening on port 3000")
})