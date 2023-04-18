import { useState } from 'react';

const UseClients = () => {
  const [clientData, setClientData] = useState();

  return {clientData, setClientData};
};

export default UseClients;