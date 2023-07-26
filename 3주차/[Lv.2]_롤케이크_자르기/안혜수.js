function solution(topping) {
    const bro = {chulsu : new Set([...topping]), littleBro : new Set(), max : topping.length, answer : 0};
    const toppingNum = {};
    
    topping.forEach(x => {
        toppingNum[x]?toppingNum[x]++:toppingNum[x]=1;
    }) 
    
    for(let i = 0; i < bro.max-1; i++){
        let slice = topping.pop();
        bro.littleBro.add(slice);
        
        if(!--toppingNum[slice])bro.chulsu.delete(slice)
        if(bro.chulsu.size === bro.littleBro.size)bro.answer++;
    }
    return bro.answer;
}