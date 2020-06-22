const express = require('express');
let router = express.Router();
var formidable = require('formidable');

var path = require("path");
var fs = require("fs");

router.get('/page',function (req, res) {
    res.send('imagepage');
})

router.post("/upload", function (req, res) {
    let datas = {};
    datas.code = '0';
    datas.message = '上传图片成功';
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    var filedr = "./public/images";
    form.uploadDir = filedr;
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files) {
        console.log(files.file);
        var filename = files.file.name;
        var nameArray = filename.split('.');
        var type = nameArray[nameArray.length - 1];
        var name = '';
        for (var i = 0; i < nameArray.length - 1; i++) {
            name = name + nameArray[i];
        }
        var date = new Date();
        // var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        //var avatarName = '/' + name + '_' + date.getTime() + '.' + type;
        var avatarName = date.getTime() + '.' + type;
        var newPath = form.uploadDir + '/' + avatarName;
        fs.renameSync(files.file.path, newPath); //重命名
        // res.send({data:"/upload/"+avatarName})
        let data = {};
        data.name = avatarName;
        data.url = 'images/' + avatarName;
        datas.data = data;
        res.send(datas);
        return;
    })
});

router.get('/delete', function(req, res) {
    var url = './public/images/';
    var name = req.body.name || req.query.name;
    function deleteFile(url,name){
        var files = [];
        if( fs.existsSync(url) ) {    //判断给定的路径是否存在
            files = fs.readdirSync(url);    //返回文件和子目录的数组
            files.forEach(function(file,index){
                var curPath = path.join(url,file);
                if(fs.statSync(curPath).isDirectory()) { //同步读取文件夹文件，如果是文件夹，则函数回调
                    deleteFile(curPath,name);
                } else {
                    if(file.indexOf(name)>-1){    //是指定文件，则删除
                        fs.unlinkSync(curPath);
                        console.log("删除文件："+curPath);
                        res.send("删除文件：" + curPath + "成功");
                    }
                }
            });
        }else{
            res.send("删除失败");
        }
    }
    deleteFile(url,name);
});

module.exports = router;