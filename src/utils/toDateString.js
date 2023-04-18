const toDateString = (date) => date.toLocaleDateString(
  'pt-Br',
  {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  }); 

export default toDateString;