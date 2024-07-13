const removeDuplicate= (data) =>{
    return [...new Set(data)]
}
console.log(removeDuplicate([1,2,3,4,5,6,7,8,9,0,0,3,4,5,7]))