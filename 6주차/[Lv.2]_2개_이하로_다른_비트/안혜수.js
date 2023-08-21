function solution(numbers) {
    return numbers.map(x => {
        let bin = x.toString(2).split("").reverse();
        for(let i = 0; i<bin.length; i++){
            if(bin[i]==='0')return x+Math.ceil(2**(i-1));
        }
        return x+2**(bin.length-1);
    })
}
