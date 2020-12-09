// Callback function - is passed as an argument to a function
// and is executed inside that function

// high order function - a function that receives a function is an argument 
// or return a function as a result

// callBack function
const morning = (name) => {
    return `Good morning ${name.toUpperCase()}`
}

// Higher order function 
const greetings=(name, callBack)=>{
    console.log(`${callBack(name)}, it's a wonderful day`)
}
greetings('Freak', morning)
greetings('Jojo', morning)
greetings("Junior", morning);
greetings("Tshepo", morning);
greetings("Bongani", morning);
greetings("Sunnie", morning);
greetings("Joseph", morning);
greetings("Thabang", morning);