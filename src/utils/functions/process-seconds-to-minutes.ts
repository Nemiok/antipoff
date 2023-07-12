const processSecondsToMinutes = (secs: string | number) => {
  const secsNum = Number(secs)

  const minutes = String(Math.floor(secsNum / 60));
  let seconds = String(secsNum - Number(minutes) * 60);

  if (Number(seconds) < 10) seconds = '0' + seconds

  return {
    minutes,
    seconds
  }
}

export default processSecondsToMinutes