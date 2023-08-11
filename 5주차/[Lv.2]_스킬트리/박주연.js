function solution(skill, skill_trees) {
    function checkSkill(value){
        const order = skill.split(''); 
        let idx = 0; 
        
        for (let i = 0; i < value.length ; i++){
            // skill에 없는 종류가 있을때
            if(!order.includes(value[i])) continue;
            
            // 순서 검사
            if(value[i] !== order[idx++]) return false
        }
        return true;
    }
    
    return skill_trees.filter((v) => checkSkill(v)).length
}