// assinging the values for manupulating data.
const counter= document.getElementById("count");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");


// for incrementing counter by 1
increment.addEventListener("click", () => {
    const count = Number(counter.innerText);
    counter.innerText = count+1
});

// for decrementing counter by 1
decrement.addEventListener("click", () => {
    const count = Number(counter.innerText);
    counter.innerText= count-1;
});

// for reset counter to 0
reset.addEventListener("click", ()=>{
    counter.innerText=0;
});

