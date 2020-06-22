var action_user = require("../action/meme_info.js");
var conn_user = require("../model/meme_info.js");
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



module.exports = function (app) {
  //所有的路由信息
  //后台系统
  app.get('/', function (req, res) {
    conn_user.getMemes(function (data) {
      if (data.status) {
        data.title = "增删改查";
        res.type('html');
        res.render('index', data);
      } else {
        res.render('error', {message: "信息加载失败"});
      }
    });
  });

  //接口功能
  //搜索
  app.get('/search',function (req,res) {
    // 定义SQL语句
    const name = req.body.name || req.query.name;
    const sqlStr = "select * from meme_info " + (name ? "where memename like '%' ? '%' limit 1" : "");
    //经典错误res命名的问题，这个接口有两个回调函数，一个是用于返回到前端，一个是处理查询数据库返回的对象，之前图中的resSave是res，与node项目 中的res形成冲突，会导致请求超时错误。之后命名尤其是回调函数里不要用res了。
    conn.query(sqlStr, name, (err, resSave) => {
      if (err) return res.json({code: 404, data: "获取失败"});
      res.json({
        code: 0, data: resSave
      });
    });
  })
  //随机
  app.get('/random',function(req,res){
      //定义SQL语句
      const sqlStr = "SELECT * FROM meme_info ORDER BY RAND() LIMIT 1 ";
      conn.query(sqlStr, (err, resSave) => {
          if (err) return res.json({code: 404, data: "获取失败"});
          res.json({
              code: 0, data: resSave
          });
      });
  })
  //热门
  app.get('/hot',function (req,res) {
      //定义SQL语句


  })
  //人物
  app.get('/character',function (req,res) {
      //定义SQL语句
      const sqlStr = "SELECT * FROM meme_info WHERE memetag = 'Character' ORDER BY RAND() LIMIT 1";
      conn.query(sqlStr, (err, resSave) => {
          if (err) return res.json({code: 404, data: "获取失败"});
          res.json({
              code: 0, data: resSave
          });
      });
  })
  //动漫
  app.get('/anime',function (req,res) {
      //定义SQL语句
      const sqlStr = "SELECT * FROM meme_info WHERE memetag = 'Anime' ORDER BY RAND() LIMIT 1";
      conn.query(sqlStr, (err, resSave) => {
          if (err) return res.json({code: 404, data: "获取失败"});
          res.json({
              code: 0, data: resSave
          });
      });
  })
  //游戏
  app.get('/game',function (req,res) {
      //定义SQL语句
      const sqlStr = "SELECT * FROM meme_info WHERE memetag = 'Game' ORDER BY RAND() LIMIT 1";
      conn.query(sqlStr, (err, resSave) => {
          if (err) return res.json({code: 404, data: "获取失败"});
          res.json({
              code: 0, data: resSave
          });
      });
  })
  //饭圈
  app.get('/entertainment',function (req,res) {
      //定义SQL语句
      const sqlStr = "SELECT * FROM meme_info WHERE memetag = 'Entertainment' ORDER BY RAND() LIMIT 1";
      conn.query(sqlStr, (err, resSave) => {
          if (err) return res.json({code: 404, data: "获取失败"});
          res.json({
              code: 0, data: resSave
          });
      });
  })
   //添加用户上传词条(旧版)
    app.post('/addUserMemes', function (req, res, next) {
        console.log(req.body);
        conn_user.addMemes({
            data: {
                memename: req.body.name,
                memetext: req.body.text,
            },
            sql: "INSERT INTO user_meme SET ?"
        }, function (data) {
            res.send(data);
        });
    })
    //添加用户上传词条
    app.get('/addmemes', function (req, res, next) {
        //存储接受的要添加的数据
        // console.log(req);
        let name = req.body.name || req.query.name;
        let tag = req.body.tag || req.query.tag;
        if(tag==='') tag='Other';
        let text = req.body.text || req.query.text;
        let imgurl = req.body.imgurl || req.query.imgurl;
        let params = [name, tag, text, imgurl];
        // console.log(params);
        // console.log(name);
        //定义SQL语句，添加进数据库user_meme
        const sqlStr = "INSERT INTO user_meme(memename,memetag,memetext,memeimgurl) VALUES (?,?,?,?)";
        console.log(sqlStr);
        conn.query(sqlStr, params, (err,resSave) => {
            if(err) {
                return res.json({code:404, data: "添加失败"});
            }
            res.json({
                code: 0, data: "添加成功"
            });
        });
    });


  action_user(app);
};