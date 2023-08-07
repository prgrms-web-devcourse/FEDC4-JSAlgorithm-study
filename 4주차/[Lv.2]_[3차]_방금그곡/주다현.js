function solution(m, musicinfos) {
  let answer = '';
  m = m.replace(/(C|D|F|G|A)#/g, (_, v) => v.toLowerCase());

  musicinfos = musicinfos
    .map((v, i) => {
      let playingMelody = '';

      let [start, end, name, melody] = v.split(',');
      let [startHour, startMinute] = start.split(':');
      let [endHour, endMinute] = end.split(':');
      let playingTime = Number(endMinute) - Number(startMinute);

      if (startMinute > endMinute) {
        playingTime = (Number(endHour) - startHour - 1) * 60 + (60 + Number(endMinute) - startMinute);
      }
      melody = melody.replace(/(C|D|F|G|A)#/g, (_, v) => v.toLowerCase());

      if (playingTime < melody.length) {
        playingMelody += melody.slice(0, playingTime);
      } else if (playingTime % melody.length == 0) {
        for (let i = 0; i < playingTime / melody.length; i++) {
          playingMelody += melody;
        }
      } else {
        for (let i = 0; i < parseInt(playingTime / melody.length); i++) {
          playingMelody += melody;
        }
        playingMelody += melody.slice(0, playingTime % melody.length);
      }

      return [playingTime, name, playingMelody];
    })
    .filter((v) => v[2].includes(m))
    .sort((a, b) => b[0] - a[0]);

  return musicinfos[0]?.[1] || '(None)';
}
