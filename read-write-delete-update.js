let fs = require('fs');
/* fs.readFile('./topics.txt',(err,data)=> {
    if(err) {
        console.log("file not found...");
    }
    else{
        console.log(data.toString());
    }
}); */


/* let data = fs.readFileSync('./topics.txt');
console.log(data.toString());
console.log("before reading.."); */

/////////////////////////////

/* fs.writeFile('./topics2.txt', "Updating through program",(err,data) => {
    if (err) {
        console.log("Faild to write");
    } else {
        console.log("write success");
    }
})
 
console.log("before write.."); */
///////////////////////////////////////////

fs.appendFile('./topics.txt', "7.Ading extra text through program",(err,data) => {
    if (err) {
        console.log("Faild to add");
    } else {
        console.log("adding success");
    }
})
 
console.log("before write..");//Async execution
///////////////////////////////////////////////////
/* unlinkSync for sync exe */
/* fs.unlink('./topics3.txt',(err) => {
    if (err) {
        console.log("Faild to delete");
    } else {
        console.log("delete success");
    }
})
 
console.log("before detele.."); */
/////////////////////////////////////////////////////