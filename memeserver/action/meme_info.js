var meme = require("../model/meme_info.js");


module.exports = function (app) {
    app.post('/updateMemes', function (req, res, next) {
        meme.updateMemes({
            sql: "update meme_info SET memename=?,memetag=?,memetext=?,memeimgurl=? WHERE id = ?",
            params: [ req.body.memename, req.body.memetag, req.body.memetext, req.body.memeimgurl, req.body.id ]
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/deleteMemes', function (req, res, next) {
        meme.deleteMemes({
            sql: "DELETE FROM meme_info WHERE id = " + req.body.id
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/addMemes', function (req, res, next) {
        meme.addMemes({
            data: {
                memename: req.body.memename,
                memetag: req.body.memetag,
                memetext: req.body.memetext,
                memeimgurl: req.body.memeimgurl
            },
            sql: "INSERT INTO meme_info SET ?"
        }, function (data) {
            res.send(data);
        });
    });


};