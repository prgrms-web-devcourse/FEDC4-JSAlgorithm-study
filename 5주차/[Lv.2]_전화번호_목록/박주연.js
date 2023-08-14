function solution(phone_book) {
  // 배열 안에 있는 문자열 원소들을 유니코드 값에 따라 오름차순 정렬 하기
  phone_book = phone_book.sort();

  for (let i = 0; i <= phone_book.length - 2; i++) {
    // 앞 순서의 전화번호 길이만큼 slice해서 같은지 비교
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) return false;
  }
  return true;
}
