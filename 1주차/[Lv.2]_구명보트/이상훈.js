function solution(people, limit) {
  let answer = 0;

  people = people.sort((a, b) => b - a);
  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    let boat = limit;

    while (boat >= people[start]) {
      boat -= people[start];
      start++;
    }

    while (boat >= people[end]) {
      boat -= people[end];
      end--;
    }

    answer++;
    boat = limit;
  }

  return answer;
}
