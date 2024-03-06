// accessing the Array

let a = [1,2,3,4,5, "thamizh"]


console.log("values>>>", a)
console.log("Accessing a element from the array>>",a[1]);
console.log("calculating the length>>>>",a.length);
console.log("Acessing the last element",a.length-1);

//push and unshift
console.log("adding an element in the last>>>",a.push(12));
console.log("adding an element in the Starting>>>",a.unshift(0));
console.log("Array after adding the new element>>>", a)

// pop and shift
console.log("Removing an element in the last>>>", a.pop());
console.log("adding an element in the Starting>>>", a.shift());
console.log("Array after Removing the element>>>", a)

//Filters
console.log("--------------------------------------------filters------------------------------")
console.log(a.filter(item => item % 2 === 0))
console.log(a.filter(item => typeof item === 'string'))
console.log("------------------------------------------slicing Array-----------------------------")
console.log("Array after sliing the element",a.slice(1,5))
a.forEach(item=> console.log(item))


