const fs = require('fs');
const sharp = require('sharp');

async function imgCreate(path,filename,username,width,height) {
await sharp(path).resize({
        height: height,
        width: width
    }).toFile('/server/public/images/'+username+"/"+filename+".png")
        .then(function (newFileInfo) {
            // newFileInfo holds the output file properties
            console.log("Success");
            if(width==50)
              fs.unlink(path, (err) => {
            if (err) {
                console.error("unlink err");
                console.error(err);
            }});
            
            
        })
        .catch(function (err) {
            console.error("sharp err");
            console.log(err);
        });
}
function imgUserInit(path,username) {
    fs.mkdir('/server/public/images/' + username, (err) => {
        if (err) throw err;
       imgCreate(path,"prof",username,300,300);
       imgCreate(path,"ico",username,50,50);

    });
}
module.exports=imgUserInit;