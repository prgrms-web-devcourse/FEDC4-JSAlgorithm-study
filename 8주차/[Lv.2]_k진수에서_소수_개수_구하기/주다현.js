//과거의 나 -> 이번에도 역시나 과거의 내가 더 잘했다.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0,
    prime;
  prime = (n.toString(k) + '').split('0');

  for (let i = 0; i < prime.length; i++) {
    if (isPrime(prime[i])) answer++;
  }

  return answer;
}

//현재의 나 -> 분발하자 현재의 나
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = [],
    result = [];
  let arr = n.toString(k).split('');

  arr.forEach((v, i) => {
    if (v !== '0') result.push(v);
    else {
      answer.push(result.join(''));
      result = [];
    }
    if (i == arr.length - 1 && result.length !== 0) answer.push(result.join(''));
  });
  answer = answer.map((v) => Number(v)).filter((v) => isPrime(v) == true);
  return answer.length;
}
