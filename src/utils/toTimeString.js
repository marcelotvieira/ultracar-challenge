const toTimeString = (date) => date.toLocaleTimeString(
  'pt-Br',
  { 
    hour12: false,
  }
);

export default toTimeString;