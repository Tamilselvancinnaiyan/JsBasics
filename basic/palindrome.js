const palindrome =(data) =>{
    const word1 = data
    const word2 = data.split("").reverse().join('')
    if(word1 === word2){
        return 'this is palindrome'
    }else{
        return 'not a plaindrome'
    }
    
}

console.log(palindrome('12121211'))