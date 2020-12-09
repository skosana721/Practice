// while loop

let amount = 20; 

while (amount >0) {
    console.log(`I have R${amount}`);
    amount --;
}

// Do while loop 
// runs code block first and condition second
// helps prevent infinity loops

let num = 2;
do {
    console.log(`I have ${num} apples`)
    num++;
} while (num < 12);

// for loop

let i;
for (i =0; i < 15;i++) {
    console.log(`The number is ${i}`);
    
}
for (let num = 10 ; num >= 0; num--) {
    console.log(num)
    
}