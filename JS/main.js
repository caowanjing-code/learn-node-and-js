var fs=require("fs");
var data=fs.readFileSync('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    else{
        console.log(data.toString());

    }
});
// console.log(data.toString());
console.log("this is  ending")