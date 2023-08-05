function solution(m, musicinfos) {
  var answer = [0, '(None)'];
  m = m.replace(/(C|D|F|G|A)#/g, (_, x) => x.toLowerCase());
  musicinfos.map((music) => {
    let [start, end, name, sheet] = music.split(',');
    let play_time = (end.substr(0, 2) - start.substr(0, 2)) * 60
      + (end.substr(3) - start.substr(3));
    sheet = sheet.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
    sheet = sheet.padEnd(play_time, sheet).slice(0, play_time);
    if (sheet.includes(m)) {
      if (answer[0] < play_time) {
        answer[1] = name;
        answer[0] = play_time;
      }
    }
  })
  return answer[1];
}