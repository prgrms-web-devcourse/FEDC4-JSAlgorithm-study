function solution(phone_book) {
  const dict = new Set();
  phone_book = phone_book.sort((a, b) => a.length - b.length);

  for (const phone of phone_book) {
    for (let i = 0; i < phone.length; i++) {
      if (dict.has(phone.slice(0, i + 1))) return false;
    }

    dict.add(phone, true);
  }

  return true;
}
