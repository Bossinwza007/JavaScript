function criticalcode(){
    throw "Throwing an exception";
}

function logerror(theException){
    console.log(theException);
}

console.log("\n================Try...Catch================\n");
//
try {
    criticalcode();
}
catch(ex){
    console.log("Got an error");
    logerror(ex);
}
//
console.log("\n=========Throwing in Try...Catch============\n");
try {
    throw "An exception that is thrown every time";
}catch(ex){
    console.log("Got an error");
    logerror(ex);

}
//
console.log("\n=========Throwing in Try...Finaly============\n");
try {
    throw "An exception that is thrown every time";
}catch(ex){
    console.log("got an code");
    logerror(ex);
}finally{
    console.log("Code that alway will run");
}


function hello(){
    console.log("\n***********Throwing Exceptions**********\n")
}