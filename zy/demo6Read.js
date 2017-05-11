/**
 * Created by Administrator on 2017/5/9.
 */
var fs=require('fs');
// var readFile=function (router) {
//     fs.readFile(router,'utf-8',function (err,data) {
//         // if(err)throw err;
//         console.log(data);
//     })
// };
var fsToken={
    //读取
    readFile:function (router) {
        fs.readFile(router,'utf-8',function (err,data) {
            if (err) throw err;
            console.log(data);
        })
    },
    //写入
    writeFile:function(router){
        fs.writeFile(router,'bbb',function (err) {    //写入
            if (err) throw err;
            console.log("写入成功")
        })
    },
    //复制
    copyFile:function (router) {
        fs.readFile(router,'utf-8',function (err,data){
            if(err) throw err;
            fs.writeFile(__dirname+'/demoFsCopy6.txt',data,function (err) {
                if(err) throw err;
                console.log("复制成功")
            })
        });
    },
    //删除
    unlink:function (router) {
        fs.unlink(router,function (err) {
            if(err) throw err;
            console.log("删除成功")
        }); 
    },
    //更改
    reName:function (router) {
        fs.rename(router,'new3.txt',function (err) {
            if(err) throw err;
            console.log("文件修改成功");
        });
    },
    //文件信息
    exites:function (router) {
        fs.exists(router,function (result) {
            if(result){
                fs.stat(router,function (err,stats) {
                    if(err)throw err;
                    if(stats.isDirectory()){
                        console.log("这是文件夹");
                    }else {
                        console.log("这是文件")
                    }
                });
            }else {
                console.log("文件不存在")
            }
        });
    },
    //非覆盖复制
    CopyFile:function (router) {
        fs.readFile(router,'utf-8',function (err,data) {
            if(err)throw err;
            fs.appendFile(router,data,function (err) {
                if(err)throw err;
            })
        });
    }

};
module.exports=fsToken;
/*
* module.exports={}
* readFile=module.exports=function(){}
*
* */
