const toCurrency = (number) => number
  .toLocaleString(
    'pt-Br',
    { 
      style: 'currency',
      currency: 'BRL',
    },
  );

export default toCurrency;