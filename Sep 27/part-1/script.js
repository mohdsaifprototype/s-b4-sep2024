// Modify in place

let counter = 0;

// console.log("Counter:", counter);

// counter = counter + 1;
// console.log("Counter:", counter);

// counter += 1; // counter = counter + 1;
// console.log("Counter:", counter);

// counter++; // counter = counter + 1;
// console.log("Counter:", counter);

/* Post Increment: Use then change */
console.log("Counter:", counter++);
console.log("Counter:", counter++);
console.log("Counter:", counter++);
console.log("Counter:", counter);
console.log("-------------------------------");

/* Post Decrement */
console.log("Counter:", counter--);
console.log("Counter:", counter--);
console.log("Counter:", counter--);
console.log("Counter:", counter);

/* Pre Increment: Change then use */
let flag = 0;
console.log("Flag:", ++flag);
console.log("Flag:", ++flag);
console.log("Flag:", ++flag);
console.log("Flag:", flag);
console.log("-------------------------------");
/* Pre Decrement */
console.log("Flag:", --flag);
console.log("Flag:", --flag);
console.log("Flag:", --flag);
console.log("Flag:", flag);
