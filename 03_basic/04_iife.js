(function chai(){
    // named iife 
    console.log(`DB CONNECTED`);
})();// THIS INVOKE THE FUNCTION IMMEDIATELY

( (name) => {
    // simple iife 
    console.log(`DB CONNECTRD TWO ${name}`);
})('krishna')