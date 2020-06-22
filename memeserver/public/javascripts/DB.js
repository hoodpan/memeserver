$(function () {
    var update_meme
        , ul;

    function parse_meme_html(data) {
        var html = '';
        html += "<li><ul class='tabrow' data-id='" + data.id + "'>";
        html += "<li>" + data.id + "</li>";
        html += "<li>" + data.memename + "</li>";
        html += "<li>" + data.memetag + "</li>";
        html += "<li>" + data.memetext + "</li>";
        html += "<li>" + data.memeimgurl + "</li>";
        html += "<li><a href='#'>修改</a>&nbsp;|&nbsp;<a href='#'>删除</a></li>";
        html += "</ul></li>";
        return html;
    }

    $("#add").click(function () {
        var memename = $("#memename").val(),
            memetag = $("#memetag").val(),
            memetext = $("#memetext").val(),
            memeimgurl = $("#memeimgurl").val();
        $.post("/addMemes", {
            memename: memename,
            memetag: memetag,
            memetext: memetext,
            memeimgurl: memeimgurl
        }, function (data) {
            if (data.status) {
                $("#memetable").append(parse_meme_html({
                    id: data.id,
                    memename: memename,
                    memetag: memetag,
                    memetext: memetext,
                    memeimgurl: memeimgurl
                }));
            }
        });
    });

    $(".delete").click(function () {
        var li = $(this).parent().parent();
        var id = li.attr("data-id");
        $.post("/deleteMemes", {
            id: id
        }, function (data) {
            if (data.status) {
                li.parent().remove();
            }
        });
    });

    $(".update").click(function () {
        var id = $(this).parent().parent().attr("data-id");
        ul = $("ul[data-id='" + id + "']");
        update_meme = {
            id: id,
            memename: ul.children()[ 1 ].innerText,
            memetag: ul.children()[ 2 ].innerText,
            memetext: ul.children()[ 3 ].innerText,
            memeimgurl: ul.children()[ 4 ].innerText
        };
        $("#memename").val(update_meme.memename);
        $("#memetag").val(update_meme.memetag);
        $("#memetext").val(update_meme.memetext);
        $("#memeimgurl").val(update_meme.memeimgurl);
        $("#update").removeClass("ele_none");
    });

    $("#update").click(function () {
        if (update_meme.id) {
            var meme = {
                id: update_meme.id,
                memename: $("#memename").val(),
                memetag: $("#memetag").val(),
                memetext: $("#memetext").val(),
                memeimgurl: $("#memeimgurl").val()
            };
            if (JSON.stringify(update_meme) !== JSON.stringify(meme)) {
                $.post("/updateMemes", {
                    memename: meme.memename,
                    memetag: meme.memetag,
                    memetext: meme.memetext,
                    memeimgurl: meme.memeimgurl,
                    id: meme.id
                }, function (data) {
                    if (data.status) {
                        ul.children()[ 1 ].innerText = meme.memename;
                        ul.children()[ 2 ].innerText = meme.memetag;
                        ul.children()[ 3 ].innerText = meme.memetext;
                        ul.children()[ 4 ].innerText = meme.memeimgurl;
                        $("#update").addClass("ele_none");
                    }
                });
            }
        }
    })

});