let a = "thamizh"
let a1 = "thamizh"
const anagram = (a, a1) => {

    return a.split("").sort().join("") === a1.split("").sort().join("")
    
}

// console.log(anagram(a, a1)); // comment out this due to the cu