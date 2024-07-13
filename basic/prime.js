const prime = (data) => {
    if(data <=1) return false
    if(data ===2) return true
    if(data % 2 === 0) return false

    for ( let i =3 ; i<= Math.sqrt(data); i+= 2){
        if (data % i === 0) return false;
        }
    return true;
    }

console.log(prime(2));    
console.log(prime(3));    
console.log(prime(4));    
console.log(prime(17));   
console.log(prime(18));   
console.log(prime(19));   
console.log(prime(1));    
console.log(prime(0));