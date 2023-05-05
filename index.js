function sumValuesByDay(obj) {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  const sums = [0, 0, 0, 0, 0, 0, 0];
  const counts = [0, 0, 0, 0, 0, 0, 0];

  for (let date in obj) {
    const value = obj[date];
    const day = new Date(date).getDay();
    sums[day] += value;
    counts[day]++;
  }

  const result = {};
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (counts[i] > 0) {
      result[day] = sums[i];
    } else {
      const prev = i === 0 ? sums[6] : sums[i - 1];
      const next = i === 6 ? sums[0] : sums[i + 1];
      const mean = Math.round((prev + next) / 2);
      result[day] = mean;
    }
  }
  return result;
}

var dictionary = {'2020-01-01':4 , '2020-01-02':4, '2020-01-03':6, '2020-01-04':8, '2020-01-05':2, '2020-01-06':-6, '2020-01-07':2, '2020-01-08':-2}

console.log(sumValuesByDay(dictionary))


