var n1 = 5;
function sum(n, n2) {
    return n + n2;
}
console.log(sum(n1, 3));
/////
function getTotal(num) {
    return num.reduce(function (acc, cur) {
        return acc + cur;
    }, 4);
}
console.log(getTotal([3, 2, 1]));
// Get Suggestion
var user = {
    firstName: "Rupali",
    lastName: "Mohanty",
    role: "Developer",
};
console.log(user.firstName);
// Question mark ? used for optinal
var user1 = {
    name: "tapan",
    age: 24,
};
function login(userData) {
    return userData;
}
console.log(login(user1));
var userId = 54321;
var userId1 = "tapan";
var transaction1 = {
    payeeAccount: 123,
    payerAccount: 456,
};
var bankAccount = {
    accountNumber: 12345,
    accountHolder: "Tapan",
    balance: 4500,
    isActive: true,
    transaction: [transaction1],
};
var book = {
    name: "Economics",
    price: 650,
    fileSize: 300,
    format: "pdf",
    duration: 60,
};
var laptop = {
    company: "HP",
    price: 80000,
    ram: 16,
    ssd: 500,
};
//Narrowing
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(22);
//////
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3]));
