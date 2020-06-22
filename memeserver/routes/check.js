var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const conn = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '122198',
        database: 'meme'
    }
);

//获取user_meme表中所有信息
router.get('/showmeme', function(req, res, next) {
    const sqlStr = "select * from user_meme";

    conn.query(sqlStr, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });

});

//修改
router.get('/alter', function(req, res, next) {
    var id_num = req.body.id || req.query.id;
    let name = req.body.name || req.query.name;
    let tag = req.body.tag || req.query.tag;
    let text = req.body.text || req.query.text;
    let imgurl = req.body.imgurl || req.query.imgurl;
    let params = [name, tag, text, imgurl, id_num];

    //let params = ['bzd', 'sx', '我是真的不知道', '', 3];
    const sqlStr = "update user_meme set memename=?, memetag=?, memetext=?, memeimgurl=? where id = ?";
    conn.query(sqlStr, params, (err,resSave) => {
        if(err) {
            return res.json({code:404, data: "修改失败"});
        }
        res.json({
            code: 0, data: "修改成功"
        });
    });
});

//删除
router.get('/delete', function(req, res, next) {
    var id_num = req.body.id || req.query.id;

    //var id =4;
    const sqlStr = "delete from user_meme where id = " + id_num;
    conn.query(sqlStr, (err,resSave) => {
        if(err) {
            return res.json({code:404, data: "删除失败"});
        }
        res.json({
            code: 0, data: "删除成功"
        });
    });
});

//添加
router.get('/add', function (req, res, next) {
    //定义SQL语句1,获取表中最大id
    const sqlStr1 = "SELECT MAX(id) FROM meme_info";
    let id_num;
    conn.query(sqlStr1, (err, resSave) =>{
        if(err) {
            return res.json({code: 404, data: "最大id查找失败"});
        }
        else{
            id_num = resSave + 1;
        }
    });

    //存储接受的要添加的数据
    let name = req.body.name || req.query.name;
    let tag = req.body.tag || req.query.tag;
    let text = req.body.text || req.query.text;
    let imgurl = req.body.imgurl || req.query.imgurl;
    let params = [id_num, name, tag, text, imgurl];

    //定义SQL语句2，添加进数据库user_meme
    const sqlStr2 = "insert into meme_info(id,memename,memetag,memetext,memeimgurl) values (?,?,?,?,?)";
    conn.query(sqlStr2, params, (err,resSave) => {
        if(err) {
            return res.json({code:404, data: "添加失败"});
        }
        res.json({
            code: 0, data: "添加词条成功"
        });
    });
});

module.exports = router;
