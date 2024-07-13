const longestWord = (data) =>{
    const words = data.split(' ')
    let longestWord = '';

    for (const word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

console.log(longestWord("hello my name is  thamizh and im working as software developer"));