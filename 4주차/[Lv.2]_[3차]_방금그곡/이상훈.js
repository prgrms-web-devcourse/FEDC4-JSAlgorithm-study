const flatMelody = (melody) => {
  let result = '';

  for (let i = 0; i < melody.length; i++) {
    const nowChar = melody[i];
    const nextChar = melody[i + 1];
    if (nowChar !== '#' && nextChar !== '#') result += nowChar + '_';
    else result += nowChar;
  }

  return result;
};

function solution(m, musicinfos) {
  m = flatMelody(m);

  musicinfos = musicinfos
    .map((info) => {
      const item = info.split(',');
      const [startHour, startMinute] = item[0].split(':').map((e) => Number(e));
      const [endHour, endMinute] = item[1].split(':').map((e) => Number(e));
      const time = (endHour - startHour) * 60 + endMinute - startMinute;
      const title = item[2];
      const melody = flatMelody(item[3]);

      return [time, title, melody.padEnd(time * 2, melody).slice(0, time * 2)];
    })
    .sort((a, b) => b[0] - a[0]);

  for (const info of musicinfos) {
    const [duration, title, content] = info;

    if (content.includes(m)) return title;
  }

  return '(None)';
}
