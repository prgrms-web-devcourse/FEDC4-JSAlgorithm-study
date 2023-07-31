function solution(people, limit) {
  let answer = 0;
  let end = people.length - 1;
  people.sort((a, b) => b - a);

  for (let i = 0; i <= end; i++) {
    if (people[i] + people[end] <= limit) {
      end--;
    }
    answer++;
  }
  return answer;
}
