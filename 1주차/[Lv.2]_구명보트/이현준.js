function solution(people, limit) {
  people.sort((a, b) => a - b);

  let j = people.length - 1;
  for (var i = 0; i < j; j--) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
  }
  return people.length + i - i * 2;
}
