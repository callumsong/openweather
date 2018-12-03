const currentTime = () => {
  const date = new Date();
  const utcMinutes =  date.getUTCMinutes();
  const utcSeconds = date.getUTCSeconds();
  const minutes = utcMinutes < 10 ? '0' + utcMinutes : utcMinutes;
  const seconds = utcSeconds < 10 ? '0' + utcSeconds : utcSeconds;
  return `${date.getUTCHours()}:${minutes}:${seconds}`;
};

export default currentTime;
