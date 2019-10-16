const fs = require('fs');
const sharp = require('sharp');

function imgCreate(path,filename,username,width,height) {
    sharp(path).resize({
        height: height,
        width: width
    }).toFile(__dirname+'/../public/images/'+username+"/"+filename+".png")
        .then(function (newFileInfo) {
            // newFileInfo holds the output file properties
            console.log("Success")
            if(width==30){
                fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }});
            }
        })
        .catch(function (err) {
            console.log("Error occured");
        });
}
function imgUserInit(path,username) {
    fs.mkdir(__dirname + '/../public/images/' + username, (err) => {
        if (err) throw err;
        imgCreate(path,"prof",username,300,300);
        imgCreate(path,"ico",username,30,30);
        fs.unlink(path, (err) => {
            if (err) {
                console.error(err);
            }});
    });
}
module.exports=imgUserInit;