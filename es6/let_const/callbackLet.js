// Testing if you can run a callback function on a let variable

function callbackLet(cb){
    let testing = "testing";
    cb(testing);
}

callbackLet(function(response){
    console.log(response);
})