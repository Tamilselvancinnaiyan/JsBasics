const anagram =(word1, word2) =>{
    const w1 = word1.split('').sort().join('')
    const w2 = word2.split('').sort().join('')
    if (w1 === w2){
        return 'anagram'
    }else{
        return 'not anagram'
    }
}

console.log(anagram('hello', 'hell'))
console.log(anagram('listen', 'silent'))