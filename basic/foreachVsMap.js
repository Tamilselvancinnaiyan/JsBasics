const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each number doubled
numbers.forEach(number => {
    console.log(number * 2);
});

// Using map to create a new array of doubled numbers
const doubled = numbers.map(number => number * 2);
console.log(doubled);



// >>>>>>>Key Differences:
// Return Value:

// forEach: Does not return anything (undefined).
// map: Returns a new array with the transformed elements.

//>>>>>>>>> Use Case:

// forEach: For side effects or operations where the return value is not needed.
// map: For transforming each element and creating a new array.

//>>>>>>>>>> Immutability:

// forEach: Typically used for operations with side effects and can mutate the original array (though not recommended).
// map: Returns a new array and does not mutate the original array