//무지성 코드 : 10번 11번 시간초과 남
//->사실 반복문과 split() 대파티라 시간초과 예상했다. 그래도 이렇게 풀어보고 싶었다.
function solution(numbers) {
  let answer = [];

  return numbers.map((v, i) => {
    //original은 원래 주어진 배열값을 2진수로 바꿔 배열에 저장한 값
    let original = v.toString(2).split('');

    //주어진 값+1 정수부터 2진수로 바꾸고 original과 비교해 몇개나 다른지 세는 로직
    for (let i = v + 1; ; i++) {
      let current = i.toString(2).split('');
      //만약 original과 current의 길이가 다르다면
      //current 길이가 더 길 것이므로 차이만큼 original 앞부분에 0을 추가
      if (original.length !== current.length) {
        let Arr = Array(current.length - original.length).fill(0);
        original.unshift(...Arr);
      }
      //몇 개나 다른지 셈
      let count = 0;
      for (let j = 0; j < current.length; j++) {
        if (count > 2) break;
        if (current[j] !== original[j]) count++;
      }
      if (count <= 2) return i;
    }
  });
}

//통과한 코드
//허참내 나는 왜 위처럼 복잡하게 풀고 싶었을까 저렇게 푸는게 더 어려운데
function solution(numbers) {
  return numbers.map((v) => {
    let str = '0' + v.toString(2);
    //짝수일 때
    if (str[str.length - 1] === '0') {
      str = str.slice(0, str.length - 1) + '1';
    }
    //홀수일 때
    else {
      const idx = str.lastIndexOf('01');
      str = str.slice(0, idx) + '10' + str.slice(idx + 2, str.length);
    }

    return parseInt(str, 2);
  });
}
