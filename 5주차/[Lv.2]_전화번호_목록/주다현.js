/*function solution(phone_book) {
  let answer = true;

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].indexOf(phone_book[i]) == 0) return false;
    }
  }

  return answer;
}
*/

function solution(phoneBook) {
  const table = {};

  for (const element of phoneBook) {
    table[element] = true;
  }

  for (const element of phoneBook) {
    for (let i = 1; i < element.length; i++) {
      const prefix = element.slice(0, i);
      if (table[prefix]) return false;
    }
  }

  return true;
}
