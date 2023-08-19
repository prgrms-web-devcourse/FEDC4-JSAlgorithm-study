//테스트 케이스는 모두 통과했지만 효율성 실패한 코드 (결론 : 무지성 코드)
//사실 얘도 중첩 for문 사용해서 시간초과 날 것을 예상했지만 일단 이렇게 풀어보았다.
function solution(gems) {
  let answer = [];
  let kinds = [...new Set(gems)];

  for (let i = 0; i < gems.length; i++) {
    let copyKinds = [...kinds];

    for (let j = i; j < gems.length; j++) {
      let index = copyKinds.indexOf(gems[j]);
      if (index !== -1) copyKinds.splice(index, 1);
      if (copyKinds.length === 0) answer.push([i + 1, j + 1]);
    }
  }
  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}

//Map을 이용한 최종코드
function solution(gems) {
  const gemVarietyCounts = new Set(gems).size;
  const gemMap = new Map();
  const answer = [];

  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === gemVarietyCounts) {
      answer.push([gemMap.values().next().value + 1, i + 1]);
    }
  });

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
