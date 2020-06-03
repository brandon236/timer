timerArray = process.argv.slice(2);

for (time of timerArray) {
  if (time > 0 && !isNaN(time)) {
    setTimeout(() => {process.stdout.write('\x07')}, time * 1000);
  }
}

setTimeout(() => {
console.log();
}, timerArray.reduce((a,b) => Number(a) + Number(b), 0) * 1000);
