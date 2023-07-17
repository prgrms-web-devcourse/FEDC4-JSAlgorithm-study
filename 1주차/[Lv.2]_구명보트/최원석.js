function solution(people, limit) {
  let answer = 0;
  people = people.sort((a, b) => a - b);

  while (people.length) {
    const poped = people.pop();
    answer++;

    if (people.length) {
      if (poped + people[0] <= limit) {
        people.shift();
      }
    }
  }

  return answer;
}
