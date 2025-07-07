var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); },
};
console.log(sayStuff.sayHi("Nguyễn Văn A"));
console.log(sayStuff.sayBye("Nguyễn Văn A"));
