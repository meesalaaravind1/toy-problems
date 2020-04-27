function countBs(string1){
    let count=0
    for(let i=0;i<string1.length-1;i++){
        if (string1[i] === 'B'){
            count++
        }
    }
    return count
}

word=countBs("BoB the Builder")
console.log(word)

function countchars(string1,character){
    let count=0
    for(let i=0;i<string1.length-1;i++){
        if (string1[i] === character){
            count++
        }
    }
    return count
}

word2 = countchars("aravind",'a')
console.log(word2)