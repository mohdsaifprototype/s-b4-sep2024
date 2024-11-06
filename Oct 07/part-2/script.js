let usrName = prompt("Enter your name");

// usrName = usrName ?? "Student";
usrName = usrName || "Student";
console.log("Welcome", usrName);