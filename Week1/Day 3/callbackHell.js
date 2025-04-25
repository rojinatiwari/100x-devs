//problem of callback 
// Callback hell is a situation where you have multiple nested callbacks, making the code hard to read and maintain.
// This is often seen in asynchronous programming, especially with nested functions.
function task1(callback) {

    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task Two completed");
        callback();
    },);
}

task1(function () {
    task2(function () {
        console.log("Both tasks completed");
    });
});
