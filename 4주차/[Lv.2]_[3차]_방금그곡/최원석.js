function solution(m, musicinfos) {
  const result = [];
  m = m.match(/\w#?/g);

  function getTotalTime(startTime, endTime) {
    const [startTimeHours, startTimeMinutes] = startTime.split(':');
    const [endTimeHours, endTimeMinutes] = endTime.split(':');

    return endTimeHours * 60 + +endTimeMinutes - (startTimeHours * 60 + +startTimeMinutes);
  }

  for (const musicinfo of musicinfos) {
    const [startTime, endTime, title, sheet] = musicinfo.split(',');
    const totalTime = getTotalTime(startTime, endTime);
    const realSheet = sheet.match(/\w#?/g);
    let listenSheet = [];

    for (let i = 0; i < Math.ceil(totalTime / realSheet.length); i++) {
      listenSheet.push(...realSheet);
    }

    listenSheet = listenSheet.slice(0, totalTime);

    for (let i = 0; i <= listenSheet.length - m.length; i++) {
      if (listenSheet.slice(i, i + m.length).join('') === m.join('')) {
        result.push({ title: title, time: totalTime });
        break;
      }
    }
  }

  return result.length === 0 ? '(None)' : result.sort((a, b) => b.time - a.time)[0].title;
}
